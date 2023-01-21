import { useEffect, useState } from 'react';
import { Spinner, FormControl, Box, Input, FormLabel } from '@chakra-ui/react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, userError, userIsLoading } from '~/features/user/userSlice';

// components and hooks
import { useUserAuth } from '~/hooks/useUserAuth';
import { TextError } from '../signIn/TextError';
import { ButtonAuth } from './ButtonAuth';
import { useNavigate } from 'react-router-dom';
import { useShowPassword } from '~/hooks/useShowPassword';
import { EyeIcon } from '../EyeIcon';

const FormLogin = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { showPassword, handleShowPassword } = useShowPassword();
	const navigate = useNavigate();
	const { isUserAuthenticated } = useUserAuth();

	const isInvalidUser = useSelector(userError);
	const isLoading = useSelector(userIsLoading);

	const dispatch = useDispatch();

	useEffect(() => {
		if (!isUserAuthenticated) return;
		setEmail('');
		setPassword('');
	}, [isUserAuthenticated]);

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(loginUser({ email, password, navigate }));
	};

	return (
		<FormControl
			onSubmit={handleSubmit}
			as='form'
			display='flex'
			flexDir='column'
			gap='30px'
			w='max-content'
		>
			<Box>
				<FormLabel htmlFor='email' m='0' fontWeight='300'>
					EMAIL
				</FormLabel>
				<Input
					id='email'
					type='text'
					value={email}
					onChange={(event) => setEmail(event.target.value)}
					variant='flushed'
					autoFocus
				/>
			</Box>
			<Box pos='relative'>
				<FormLabel htmlFor='password' m='0' fontWeight='300'>
					CONTRASEÑA
				</FormLabel>
				<Input
					id='password'
					type={showPassword ? 'text' : 'password'}
					value={password}
					onChange={(event) => setPassword(event.target.value)}
					variant='flushed'
				/>
				<EyeIcon
					onClick={handleShowPassword}
					showPassword={showPassword}
				/>
				{isInvalidUser && (
					<TextError>Email o Contraseña incorrecto</TextError>
				)}
			</Box>
			<ButtonAuth>
				{isLoading ? <Spinner color='white' mx='10px' /> : 'LOGIN'}
			</ButtonAuth>
		</FormControl>
	);
};

export default FormLogin;
