import { useSelector } from 'react-redux';
import { shippingCartState } from '~/features/cart/cartSlice';
import { productsInCart } from '~/features/products/productsCartSlice';

import { optionsShipping } from '~/constans/optionsShipping';

export const useShipping = () => {
	const shippingOption = useSelector(shippingCartState);
	const productsCart = useSelector(productsInCart);

	// ? find within the array the option you chose in the radius
	const selectOption = optionsShipping.find(
		(option) => shippingOption === option.value
	);

	// ? Calculate the price of all products
	const totalPriceProducts = productsCart
		.map((product) => product.cost * product.count)
		.reduce((acc, curr) => acc + curr, 0);

	// ? Calculate the price of all products plus shipping
	const totalCost = totalPriceProducts + selectOption.price;

	return { shippingOption, selectOption, totalPriceProducts, totalCost };
};
