import { useState, useEffect, useCallback, useContext } from 'react';

import { SearchContext } from '~/context/searchContext';
import { useDispatch, useSelector } from 'react-redux';
import {
	getProducts,
	isLoadingProducts,
	productsStore
} from '~/features/products/getProductsSlice';

export const useProducts = ({ selectFilters }) => {
	const [showAllProducts, setShowAllProducts] = useState(false);
	const { isSearching } = useContext(SearchContext);

	const dispatch = useDispatch();
	const productsList = useSelector(productsStore);
	const isLoading = useSelector(isLoadingProducts);

	// ? funcion que recorta el array de productos en la vista
	const productsSlice = productsList.slice(0, 10);

	// ? Mostrar mas productos en la view
	const showMoreProducts = () => {
		setShowAllProducts((prevState) => !prevState);
	};

	const products = useCallback(
		() => (showAllProducts ? productsList : productsSlice),
		[showAllProducts, selectFilters, productsList]
	);

	// ? llamado a todos los productos
	useEffect(() => {
		if (!isSearching && !selectFilters) dispatch(getProducts());
	}, [selectFilters, isSearching]);

	return { isLoading, showMoreProducts, products, showAllProducts };
};
