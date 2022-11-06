import { API_URL_LOCAL } from './postSignUpUser';

export const getRefreshUser = async ({ jwt }) => {
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
			`${API_URL_LOCAL}/api/refresh_user`,
			options
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
