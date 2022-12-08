import { useState, useEffect, useContext } from 'react';

import { useDispatch } from 'react-redux';
import { SearchContext } from '~/context/searchContext';
import { searchProducts } from '~/features/products/getProductsSlice';

export const useFilters = () => {
	const [selectFilters, setSelectFilters] = useState('');
	const { setIsSearching } = useContext(SearchContext);
	const dispatch = useDispatch();

	useEffect(() => {
		if (selectFilters) {
			dispatch(
				searchProducts({ search: selectFilters, name: 'category_id' })
			);
			setIsSearching(false);
		}
	}, [selectFilters]);

	return { setSelectFilters, selectFilters };
};
