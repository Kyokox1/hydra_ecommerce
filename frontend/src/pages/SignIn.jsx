import FormSign from '~/components/auth/signIn/FormSign';

// redux
import AuthLayout from '~/layout/auth-layout';
// import FooterAuth from '~/components/auth/login/FooterAuth';

const SignIn = () => {
	return (
		<AuthLayout>
			{/* <Title /> */}
			<FormSign />
			{/* <FooterAuth /> */}
		</AuthLayout>
	);
};

export default SignIn;
