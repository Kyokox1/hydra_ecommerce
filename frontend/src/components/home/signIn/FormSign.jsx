import { IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

// components, hooks, services
import { TextError } from './TextError';

// redux
import { useDispatch } from 'react-redux';

// forms
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../../features/user/userSlice';

const schema = yup.object().shape({
	username: yup
		.string()
		.max(20, 'el usuario debe tener menos de 20 caracteres')
		.required('usuario requerido'),
	email: yup.string().email('email inválido').required('email requerido'),
	password: yup
		.string()
		.required('contraseña requerida')
		.min(6, 'la contraseña debe tener más de 6 caracteres')
		.max(20, 'la contraseña debe tener menos de 20 caracteres'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'las contraseñas no coinciden')
		.required('confirmación requerido'),
	cellPhone: yup.string().required('celular requerido (solo números)')
});

const FormSign = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(schema)
	});

	const navigate = useNavigate();

	const [showPassword, setShowPassword] = useState(false);

	const dispatch = useDispatch();

	// submit
	const onSubmit = (data) => {
		const { username: name, password, confirmPassword, email } = data;
		dispatch(
			registerUser({ name, email, password, confirmPassword, navigate })
		);
	};

	return (
		<div className='formSignIn'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='d-flex justify-content-center'>
					<button type='submit'>Crear Cuenta</button>
				</div>
				<div className='formSignIn-usuario d-flex flex-column my-4'>
					<label>USUARIO</label>
					<input type='text' {...register('username')} />
					<TextError>{errors.username?.message}</TextError>
				</div>
				<div className='formSignIn-usuario d-flex flex-column my-4'>
					<label>CORREO ELECTRONICO</label>
					<input type='text' {...register('email')} />
					<TextError>{errors.email?.message}</TextError>
				</div>
				<div className='formSignIn-contraseña d-flex flex-column my-4'>
					<label>CONTRASEÑA</label>
					<input
						type={showPassword ? 'text' : 'password'}
						{...register('password')}
					/>
					<IconButton
						onClick={() =>
							setShowPassword((prevState) => !prevState)
						}
						aria-label='show password'
						icon={
							showPassword ? (
								<AiFillEye />
							) : (
								<AiFillEyeInvisible />
							)
						}
						pos='absolute'
						right='0'
						bottom='0'
						isRound
						bgColor='transparent'
					/>
					<TextError>{errors.password?.message}</TextError>
				</div>
				<div className='formSignIn-usuario d-flex flex-column my-4'>
					<label>REPETIR CONTRASEÑA</label>
					<input
						type={showPassword ? 'text' : 'password'}
						{...register('confirmPassword')}
					/>
					<TextError>{errors.confirmPassword?.message}</TextError>
				</div>
				<div className='formSignIn-usuario d-flex flex-column my-4'>
					<label>TELÉFONO / MÓVIL</label>
					<input type='number' {...register('cellPhone')} />
					<TextError>{errors.cellPhone?.message}</TextError>
				</div>
			</form>
		</div>
	);
};

export default FormSign;
