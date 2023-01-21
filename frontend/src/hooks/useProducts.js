import { useState, useEffect, useCallback, useContext } from 'react';

import { SearchContext } from '~/context/searchContext';
import { useDispatch, useSelector } from 'react-redux';
import {
	getProducts,
	isLoadingProducts,
	productsStore
} from '~/features/products/getProductsSlice';
import { useWindowSize } from './useWindowSize';

export const useProducts = ({ selectFilters, productsInView = 10 }) => {
	const [showAllProducts, setShowAllProducts] = useState(false);
	const { isSearching } = useContext(SearchContext);
	const { width } = useWindowSize();

	const dispatch = useDispatch();
	const productsList = useSelector(productsStore);
	const isLoading = useSelector(isLoadingProducts);

	// ? funcion que recorta el array de productos en la vista
	// if (!productsList.length) return;
	const productsSlice = productsList?.slice(0, productsInView);

	// ? Mostrar mas productos en la view
	const showMoreProducts = () => {
		setShowAllProducts((prevState) => !prevState);
	};

	// ? Efecto que detecta el tamaño de la pantalla, para asi poder mostrar todos los productos siempre en mobile
	useEffect(() => {
		if (width < 992) setShowAllProducts(true);
		else setShowAllProducts(false);
	}, [width]);

	const products = useCallback(
		() => (showAllProducts ? productsList : productsSlice),
		[showAllProducts, selectFilters, productsList]
	);

	// ? llamado a todos los productos
	useEffect(() => {
		if (!isSearching && !selectFilters) dispatch(getProducts());
	}, [selectFilters, isSearching]);

	return {
		isLoading,
		showMoreProducts,
		products,
		showAllProducts,
		productsList
	};
};
