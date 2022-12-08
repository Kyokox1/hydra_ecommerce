import { Flex, Stack, Text, Box, Input, Image } from '@chakra-ui/react';

// import { useSelector } from 'react-redux';
// import { productsInCart } from '~/features/products/productsCartSlice';

import { ButtonOrange } from '~/components/products/ButtonOrange';
import bgProduct from '/assets/img-product.png';

const Checkout = () => {
	// const productsCart =useSelector(productsInCart)

	return (
		<Flex
			as='main'
			flexDir='column'
			pt='120px'
			color='white'
			minH='100vh'
			justify='center'
			align='center'
			// gap='10rem'
		>
			<Flex justify='space-around' w='100%'>
				<Stack>
					<Text></Text>
					<Box>
						<Text>Punto de retiro</Text>
						<Text>$1.000</Text>
						<Text>Datos de cobranza</Text>
						<Text>Hunteando proyectos</Text>
						<Text>+5411234567</Text>
					</Box>
				</Stack>
				<Flex>
					<Image src={bgProduct} alt='vino' />
					<Stack>
						<Text>CREMA DE WISKHY</Text>
						<Text>$10.950</Text>
					</Stack>
				</Flex>
			</Flex>
			<Flex w='100%' flexDir='column'>
				<Stack>
					<Text>MEDIO DE PAGO</Text>
					<Box>Tarjeta de crédito debito</Box>
					<Box>Rapipago o Pago fácil</Box>
					<Box>Mercado pago</Box>
				</Stack>

				{/* optional */}
				<Box>
					<Text>DEDICATORIA PARA REGALO</Text>
					<Input />
				</Box>
				<ButtonOrange color='black'>PAGAR</ButtonOrange>
			</Flex>
		</Flex>
	);
};

export default Checkout;
