import '../components/home/signIn/signIn.css';
import FormSign from '~/components/home/signIn/FormSign';
// import FooterSign from '~/components/home/signIn/FooterSign';

// redux
import AuthLayout from '~/layout/AuthLayout';
// import FooterAuth from '~/components/home/login/FooterAuth';

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
