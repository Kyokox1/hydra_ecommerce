import { useState, useEffect } from 'react';
import { getProductsHistory } from '~/services/orders/getProductsHistory';

export const useFetch = ({ jwt }) => {
	const [productsHistory, setProductsHistory] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getProductsHistory({ jwt }).then((data) => {
			setProductsHistory(data);
			setIsLoading(false);
		});
	}, []);

	return { productsHistory, isLoading };
};
