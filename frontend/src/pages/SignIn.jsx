import FormSign from '~/components/auth/signIn/FormSign';

import Title from '~/components/auth/Title';
// redux
import AuthLayout from '~/layout/auth-layout';
// import FooterAuth from '~/components/auth/login/FooterAuth';

const SignIn = () => {
	return (
		<AuthLayout>
			<Title fontSize='2rem'>Crear cuenta</Title>
			<FormSign />
			{/* <FooterAuth /> */}
		</AuthLayout>
	);
};

export default SignIn;
