import { API_URL_LOCAL } from './postSignUpUser';

export const postLoginUser = async ({ email, password }) => {
	try {
		const options = {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				password,
				device_name: 'iphone'
			})
		};

		const response = await fetch(
			`${API_URL_LOCAL}/api/auth/login`,
			options
		);
		const data = await response.json();

		return data;
	} catch (error) {
		console.log(error);
	}
};
