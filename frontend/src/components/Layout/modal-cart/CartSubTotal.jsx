import { Text } from '@chakra-ui/react';
import { BorderContainer } from './BorderContainer';

export const CartSubTotal = ({ productsCart, totalPriceProducts }) => {
	return (
		<BorderContainer>
			<Text>Sub Total (sin envio):</Text>
			<Text fontSize='1rem'>
				{productsCart.length ? `$${totalPriceProducts}` : '$000'}
			</Text>
		</BorderContainer>
	);
};
