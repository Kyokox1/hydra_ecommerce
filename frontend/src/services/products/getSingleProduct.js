import { API_URL_LOCAL } from '../auth';

export const getSingleProduct = async ({ jwt, id = '1' }) => {
	try {
		const options = {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${jwt}`,
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		};

		const response = await fetch(
			`${API_URL_LOCAL}/api/products/${id}`,
			options
		);
		const data = await response.json();
		console.log(response);
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
};
