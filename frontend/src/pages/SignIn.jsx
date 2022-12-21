import '../components/home/signIn/signIn.css';
import FormSign from '~/components/home/signIn/FormSign';
// import FooterSign from '~/components/home/signIn/FooterSign';

// redux
import AuthLayout from '~/layout/auth-layout';
import { useRedirectUser } from '~/hooks/useRedirectUser';
// import FooterAuth from '~/components/home/login/FooterAuth';

const SignIn = () => {
	useRedirectUser();

	return (
		<AuthLayout>
			{/* <Title /> */}
			<FormSign />
			{/* <FooterAuth /> */}
		</AuthLayout>
	);
};

export default SignIn;
