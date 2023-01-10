// components
import AuthLayout from '~/layout/auth-layout';
import Title from '~/components/auth/login/Title';
import FormLogin from '~/components/auth/login/FormLogin';
import LoginNav from '~/components/auth/login/LoginNav';
import FooterAuth from '~/components/auth/login/FooterAuth';

const Login = () => {
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
