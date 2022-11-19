import { API_URL_LOCAL } from '../auth';

export const getProducts = async () => {
	try {
		const options = {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		};

		const response = await fetch(`${API_URL_LOCAL}/api/products`, options);
		const data = await response.json();
		console.log(response);
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
};
