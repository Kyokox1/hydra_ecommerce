import { FormControl, FormLabel, Spinner, Input, Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

// components, hooks, services
import { TextError } from './TextError';
import { ButtonAuth } from '../login/ButtonAuth';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, userIsLoading } from '~/features/user/userSlice';

// forms
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useShowPassword } from '~/hooks/useShowPassword';
import { EyeIcon } from '../EyeIcon';
import { schema } from '~/constans/validations';

const FormSign = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
		// setFocus
	} = useForm({
		resolver: yupResolver(schema)
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { showPassword, handleShowPassword } = useShowPassword();
	const [isEmailInvalid, setisEmailInvalid] = useState(false);

	// submit
	const onSubmit = (data) => {
		const { username: name, password, confirmPassword, email } = data;
		dispatch(
			registerUser({
				name,
				email,
				password,
				confirmPassword,
				navigate,
				resetForm: reset,
				setisEmailInvalid
			})
		);
	};
	const isLoading = useSelector(userIsLoading);

	useEffect(() => {
		if (!isEmailInvalid) return;
		const time = setTimeout(() => {
			setisEmailInvalid(false);
		}, 3000);
		return () => clearTimeout(time);
	}, [isEmailInvalid]);

	return (
		<FormControl
			onSubmit={handleSubmit(onSubmit)}
			as='form'
			display='flex'
			flexDir='column'
			gap='30px'
			w='max-content'
			pt='20px'
		>
			<Box pos='relative'>
				<FormLabel m='0' htmlFor='username'>
					USUARIO
				</FormLabel>
				<Input
					id='username'
					type='text'
					variant='flushed'
					autoFocus
					{...register('username')}
				/>
				<TextError>{errors.username?.message}</TextError>
			</Box>
			<Box pos='relative'>
				<FormLabel m='0' htmlFor='email'>
					CORREO ELECTRONICO
				</FormLabel>
				<Input
					id='email'
					variant='flushed'
					type='text'
					{...register('email')}
				/>
				<TextError>
					{isEmailInvalid
						? 'El email ya esta registrado'
						: errors.email?.message}
				</TextError>
			</Box>
			<Box pos='relative'>
				<FormLabel m='0' htmlFor='password'>
					CONTRASEÑA
				</FormLabel>
				<Input
					id='password'
					type={showPassword ? 'text' : 'password'}
					variant='flushed'
					{...register('password')}
				/>
				<EyeIcon
					onClick={handleShowPassword}
					showPassword={showPassword}
				/>
				<TextError>{errors.password?.message}</TextError>
			</Box>
			<Box pos='relative'>
				<FormLabel m='0' htmlFor='confirmPassword'>
					REPETIR CONTRASEÑA
				</FormLabel>
				<Input
					id='confirmPassword'
					type={showPassword ? 'text' : 'password'}
					variant='flushed'
					{...register('confirmPassword')}
				/>
				<TextError>{errors.confirmPassword?.message}</TextError>
			</Box>
			<Box pos='relative'>
				<FormLabel m='0' htmlFor='cellPhone'>
					TELÉFONO / MÓVIL
				</FormLabel>
				<Input
					id='cellPhone'
					type='number'
					variant='flushed'
					{...register('cellPhone')}
				/>
				<TextError>{errors.cellPhone?.message}</TextError>
			</Box>
			<ButtonAuth px='80px'>
				{isLoading ? (
					<Spinner color='white' mx='36.5px' />
				) : (
					'REGISTRARTE'
				)}
			</ButtonAuth>
		</FormControl>
	);
};

export default FormSign;
