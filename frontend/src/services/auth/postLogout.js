import { API_URL_LOCAL } from './postSignUpUser';

export const postLogoutUser = async ({ jwt }) => {
	try {
		const options = {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${jwt}`,
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		};

		const response = await fetch(`${API_URL_LOCAL}/api/logout`, options);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
