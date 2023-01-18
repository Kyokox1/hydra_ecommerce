import { useState } from 'react';
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
import { useHistoryContentTable } from '~/hooks/useHistoryContentTable';
import { getProductsHistory } from '~/services/orders/getProductsHistory';
import { PATHS } from '~/constans/pathsRoutes';

const RedeemHistory = () => {
	const { isUserAuthenticated, jwt } = useUserAuth();
	const { product: productsHistory, isLoading } = useFetch(() =>
		getProductsHistory({ jwt })
	);
	const { myCount, lastOrders } = useHistoryContentTable({ productsHistory });
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [contentModal, setContentModal] = useState({});

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
							<Text
								fontSize='1.5rem'
								w='90vw'
								minW='300px'
								maxW='800px'
								textAlign='center'
							>
								No ha realizado pedidos :c
							</Text>
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
