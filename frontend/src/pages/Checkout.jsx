import {
	Flex,
	Stack,
	Text,
	Box,
	Input,
	Image,
	StackDivider,
	useDisclosure
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { PayModal } from '~/components/pay-modal/PayModal';

import { ButtonOrange } from '~/components/products/ButtonOrange';
import { presentCartState } from '~/features/cart/cartSlice';
import { useShipping } from '~/hooks/useShipping';
import bgProduct from '/assets/img-product.png';

const Checkout = () => {
	const isPresent = useSelector(presentCartState);

	const { selectOption, totalCost } = useShipping();

	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Flex
				as='main'
				flexDir='column'
				color='white'
				minH='100vh'
				p='150px 5% 50px'
				gap='30px'
			>
				{/* header */}
				<Flex justify='space-between' w='100%'>
					<Stack
						divider={<StackDivider />}
						w='65%'
						border='1px solid white'
						p='25px'
					>
						<Text pl='20px'>Hunteando123@gmail.com</Text>
						<Box pl='20px'>
							<Text fontWeight='700'>
								{selectOption.textHeader}
							</Text>
							<Text>{selectOption.price}</Text>
							<Text fontWeight='700'>Datos de cobranza</Text>
							<Text>Hunteando proyectos</Text>
							<Text>+5411234567</Text>
						</Box>
					</Stack>
					<Flex gap='30px' alignSelf='center'>
						<Box
							w='150px'
							border='.5rem solid rgba(243, 243, 243, 0.09)'
							h='max-content'
						>
							<Image w='100%' src={bgProduct} alt='vino' />
						</Box>
						<Stack>
							<Text>CREMA DE WISKHY</Text>
							<Text>{totalCost}</Text>
						</Stack>
					</Flex>
				</Flex>
				{/* header */}

				<Flex w='65%' flexDir='column' align='initial' gap='30px'>
					<Stack gap='10px'>
						<Text pb='10px'>MEDIO DE PAGO</Text>
						<Box border='1px solid white' p='12px'>
							Tarjeta de crédito debito
						</Box>
						<Box border='1px solid white' p='12px'>
							Rapipago o Pago fácil
						</Box>
						<Box border='1px solid white' p='12px'>
							Mercado pago
						</Box>
					</Stack>

					{/* optional */}
					{isPresent && (
						<Stack gap='20px'>
							<Text>DEDICATORIA PARA REGALO</Text>
							<Input
								as='textarea'
								minH='8rem'
								maxH='8rem'
								w='100%'
								p='15px'
							/>
						</Stack>
					)}
					{/* optional */}
					<Flex justify='flex-end'>
						<ButtonOrange onClick={onOpen} color='black'>
							PAGAR
						</ButtonOrange>
					</Flex>
				</Flex>
			</Flex>
			{/* Modal */}
			<PayModal isOpen={isOpen} onClose={onClose} />
			{/* Modal */}
		</>
	);
};

export default Checkout;
