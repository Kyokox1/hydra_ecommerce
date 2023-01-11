import { API_URL_LOCAL } from '../auth';

export const postRegisterOrder = async ({ purchaseOrder, jwt }) => {
	try {
		const options = {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${jwt}`,
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ products: purchaseOrder })
		};

		const response = await fetch(
			`${API_URL_LOCAL}/api/venta-client`,
			options
		);
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
};
