export const API_URL_LOCAL = 'http://127.0.0.1:8000';

export const postSignUpUser = async ({
	name,
	email,
	password,
	confirmPassword
}) => {
	try {
		const options = {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				email,
				password,
				password_confirmation: confirmPassword,
				device_name: 'iphone'
			})
		};

		const response = await fetch(
			`${API_URL_LOCAL}/api/auth/signup`,
			options
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
