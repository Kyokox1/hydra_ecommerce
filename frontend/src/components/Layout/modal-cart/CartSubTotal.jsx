import { Text } from '@chakra-ui/react';
import { currencyFormatter } from '~/services/prices/currencyFormatter';
import { BorderContainer } from './BorderContainer';

export const CartSubTotal = ({ productsCart, totalPriceProducts }) => {
	const totalPriceProductsFormat = currencyFormatter({
		value: totalPriceProducts
	});
	return (
		<BorderContainer>
			<Text>Sub Total (sin envio):</Text>
			<Text fontSize='1rem'>
				{productsCart.length ? totalPriceProductsFormat : '$000'}
			</Text>
		</BorderContainer>
	);
};
