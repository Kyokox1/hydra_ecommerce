// components
import AuthLayout from '~/layout/auth-layout';
import Title from '~/components/home/login/Title';
import FormLogin from '~/components/home/login/FormLogin';
import LoginNav from '~/components/home/login/LoginNav';
import FooterAuth from '~/components/home/login/FooterAuth';
import { useRedirectUser } from '~/hooks/useRedirectUser';

const Login = () => {
	useRedirectUser();

	return (
		<AuthLayout>
			<Title />
			<FormLogin />
			<LoginNav />
			<FooterAuth />
		</AuthLayout>
	);
};

export default Login;
