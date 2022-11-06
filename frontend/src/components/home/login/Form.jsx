import { useEffect } from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { signClear } from '../../../features/sigIn/signSlice';
import {
	currentToken,
	loginUser,
	userError
} from '../../../features/user/userSlice';

// router
import { useNavigate } from 'react-router-dom';

// components and hooks
import { TextError } from '../signIn/TextError';

const Form = () => {
	const isInvalidUser = useSelector(userError);
	const jwt = useSelector(currentToken);

	const isLogged = Boolean(jwt);

	const estado = useSelector((state) => state.sign);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (isLogged) navigate('/productos');
	}, [isLogged]);

	const handleSubmit = (event) => {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		dispatch(loginUser({ email, password }));
	};

	return (
		<div className='form d-flex justify-content-center my-0'>
			<form onSubmit={handleSubmit}>
				<div className='form-usuario d-flex flex-column my-4'>
					<label>EMAIL</label>
					<input name='email' type='text' />
				</div>
				<div className='form-contraseña d-flex flex-column my-4'>
					<label>CONTRASEÑA</label>
					<input name='password' type='password' />
					{isInvalidUser && (
						<TextError>Email o Contraseña incorrecto</TextError>
					)}
				</div>
				<div className='d-flex justify-content-center'>
					<button type='submit'>LOGIN</button>
				</div>
				<h5 className='text-center'>Olvidaste la contraseña</h5>
				<h5
					onClick={() => dispatch(signClear(!estado.estado))}
					className='text-center crear-cuenta'
				>
					Crea una cuenta
				</h5>
			</form>
		</div>
	);
};

export default Form;
