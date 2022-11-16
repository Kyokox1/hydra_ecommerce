import { Logo } from '~/components/home/signIn/Logo';
import FormSign from '~/components/home/signIn/FormSign';
// import FooterSign from '~/components/home/signIn/FooterSign';
import '../components/home/signIn/signIn.css';
import { AiFillCloseCircle } from 'react-icons/ai';

// redux
import { useSelector, useDispatch } from 'react-redux';
import AuthLayout from '~/layout/AuthLayout';
import Title from '~/components/home/login/Title';
import FooterAuth from '~/components/home/login/FooterAuth';

const SignIn = () => {
	const estado = useSelector((state) => state.sign);
	const dispatch = useDispatch();

	return (
		<AuthLayout>
			{/* <Title /> */}
			<FormSign />
			<FooterAuth />
		</AuthLayout>
	);
};

export default SignIn;
