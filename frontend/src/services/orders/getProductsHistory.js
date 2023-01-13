import { API_URL_LOCAL } from '../auth';

export const getProductsHistory = async ({ jwt }) => {
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
			`${API_URL_LOCAL}/api/mis-ordenes`,
			options
		);
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
};
