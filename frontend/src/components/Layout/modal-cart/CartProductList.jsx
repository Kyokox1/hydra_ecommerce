import { Flex, Text } from '@chakra-ui/react';
import { CartProductItem } from './cartProductItem';

export const CartProductList = ({ productsCart }) => {
	return (
		<Flex py='10px' pl='10%' flexDir='column' gap='20px'>
			{productsCart.length ? (
				productsCart.map((product) => (
					<CartProductItem key={`cart-${product.id}`} {...product} />
				))
			) : (
				<Text>SIN PRODUCTOS</Text>
			)}
		</Flex>
	);
};
