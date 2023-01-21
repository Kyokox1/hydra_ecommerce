import { Flex, Heading } from '@chakra-ui/react';

export const NoProductsCheckout = () => {
	return (
		<Flex
			as='main'
			color='white'
			minH='100vh'
			justifyContent='center'
			align='center'
			fontSize={{ base: '1.3rem', sm: '1.8rem', md: '2.2rem' }}
		>
			<Heading as='h2' fontSize='inherit'>
				No existen productos en el Carrito.
			</Heading>
		</Flex>
	);
};
