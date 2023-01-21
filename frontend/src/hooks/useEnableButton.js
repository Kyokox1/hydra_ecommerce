import { useSelector } from 'react-redux';
import { isLoadingProducts } from '~/features/products/getProductsSlice';

export const useEnableButton = (productsArray) => {
	const isLoading = useSelector(isLoadingProducts);

	const disabledButton = productsArray.length < 10 || isLoading;

	return { disabledButton };
};
