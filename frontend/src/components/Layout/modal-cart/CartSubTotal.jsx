import { Text } from '@chakra-ui/react';
import { BorderContainer } from './BorderContainer';

export const CartSubTotal = ({ productsCart, totalCost }) => {
	return (
		<BorderContainer>
			<Text>Sub Total (sin envio):</Text>
			<Text fontSize='1rem'>
				{productsCart.length ? `$${totalCost}` : '$000'}
			</Text>
		</BorderContainer>
	);
};
