import { useState, useMemo } from 'react';
import {
	Flex,
	Text,
	Stack,
	StackDivider,
	Spinner,
	useDisclosure
} from '@chakra-ui/react';
import { BiLogIn } from 'react-icons/bi';

import { MyAccountTable } from '~/components/history/MyAccountTable';
import { LastOrdersTable } from '~/components/history/LastOrdersTable';
import { DetailsModal } from '~/components/history/details-modal/DetailsModal';
import { PopoverButton } from '~/components/layout/popover-auth-user/PopoverButton';
import { useUserAuth } from '~/hooks/useUserAuth';
import { useFetch } from '~/hooks/useFetch';
import { getProductsHistory } from '~/services/orders/getProductsHistory';
import { PATHS } from '~/constans/pathsRoutes';

import { useSelector } from 'react-redux';
import { productsInCart } from '~/features/products/productsCartSlice';

const RedeemHistory = () => {
	const { isUserAuthenticated, jwt } = useUserAuth();
	const { product: productsHistory, isLoading } = useFetch(() =>
		getProductsHistory({ jwt })
	);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const productsCart = useSelector(productsInCart);
	const [contentModal, setContentModal] = useState({});

	const myCount = useMemo(
		() => [
			{ title: 0, content: 'Ordenes Pendientes' },
			{ title: 0, content: 'Pagos Pendientes' },
			{ title: 0, content: 'Mensajes Pendientes' },
			{ title: productsCart.length, content: 'Productos en Carrito' }
		],
		[productsHistory, productsInCart]
	);

	const newArr = useMemo(() => {
		if (!productsHistory.length) return [];
		return productsHistory.map((product) => ({
			numOrder: product.num_sale,
			subtotal: product.products.reduce(
				(acc, curr) => acc + curr.pivot.total,
				0
			),
			discount: 0,
			shippingAmount: 1300,
			total:
				product.products.reduce(
					(acc, curr) => acc + curr.pivot.total,
					0
				) + 1300,
			state: 'enviado',
			dateSale: product.date_sale
		}));
	}, [productsHistory]);

	const lastOrders = useMemo(
		() => ({
			titles: [
				'# orden',
				'Subtotal',
				'Descuento',
				'Monto de Envio',
				'Total',
				'Estado'
			],
			content: [...newArr]
		}),
		[newArr, productsHistory]
	);

	const handleClickRowTable = ({ numOrder, dateSale }) => {
		dateSale = dateSale.slice(0, 10);
		setContentModal({ numOrder, dateSale });
		onOpen();
	};

	return (
		<Flex
			as='main'
			flexDir='column'
			pt='150px'
			pb='50px'
			color='white'
			minH='100vh'
			justify='center'
			align='center'
			gap='80px'
			textAlign={{ base: 'center', md: 'initial' }}
		>
			{!isUserAuthenticated ? (
				<PopoverButton route={PATHS.LOGIN}>
					<BiLogIn size='1.4rem' />
					<Text ml='8px'>Iniciar Sesión</Text>
				</PopoverButton>
			) : isLoading ? (
				<Spinner size='xl' alignSelf='center' />
			) : (
				<>
					<Stack as='section' divider={<StackDivider />} gap='20px'>
						<Text as='h2' fontWeight='700'>
							MI CUENTA
						</Text>
						{/* table */}
						<MyAccountTable dataArray={myCount} />
						{/* table */}
					</Stack>

					<Stack as='section' divider={<StackDivider />} gap='20px'>
						<Text as='h2' fontWeight='700'>
							ÚLTIMOS PEDIDOS
						</Text>
						{/* table */}
						{!productsHistory.length ? (
							<Text>No ha realizado pedidos</Text>
						) : (
							<LastOrdersTable
								titles={lastOrders.titles}
								body={lastOrders.content}
								handleClick={handleClickRowTable}
							/>
						)}
						{/* table */}
					</Stack>
					<DetailsModal
						isOpen={isOpen}
						onClose={onClose}
						contentModal={contentModal}
					/>
				</>
			)}
		</Flex>
	);
};

export default RedeemHistory;
