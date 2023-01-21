import { API_URL_LOCAL } from '../auth';

export const getFiltersProducts = async ({ search = '', name = 'name' }) => {
	try {
		const options = {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		};

		const response = await fetch(
			`${API_URL_LOCAL}/api/products/search?search=${search}&column=${name}`,
			options
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
