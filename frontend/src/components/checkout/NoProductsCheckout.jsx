import { Flex, Heading } from '@chakra-ui/react';

export const NoProductsCheckout = () => {
	return (
		<Flex
			as='main'
			color='white'
			minH='100vh'
			justifyContent='center'
			align='center'
			fontSize='2rem'
		>
			<Heading as='h2'>No existen productos en el Carrito.</Heading>
		</Flex>
	);
};
