import '../components/home/login/login.css';
import Title from '../components/home/login/Title';
import Form from '../components/home/login/Form';
import FooterLogin from '../components/home/login/FooterLogin';

const Login = () => {
	return (
		<div className='container login mt-5'>
			<div className='row'>
				<div className='col-12 col-sm-12 col-md-6 login-caja1'>
					<div className='login-form'>
						<Title />
						<Form />
						<FooterLogin />
					</div>
				</div>
				<div className='col-12 col-md-6 p-0 login-caja2'></div>
			</div>
		</div>
	);
};

export default Login;
