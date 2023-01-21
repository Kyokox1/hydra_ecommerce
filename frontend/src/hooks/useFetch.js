import { useState, useEffect } from 'react';

export const useFetch = (service) => {
	const [product, setProduct] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		service().then((data) => {
			setProduct(data);
			setIsLoading(false);
		});
	}, []);

	return { product, isLoading };
};
