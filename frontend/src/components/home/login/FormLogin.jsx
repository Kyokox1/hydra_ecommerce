import { useEffect, useState, useRef } from 'react';
import { Spinner, FormControl, Box, Input, FormLabel } from '@chakra-ui/react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, userError, userIsLoading } from '~/features/user/userSlice';

// components and hooks
import { useUserAuth } from '~/hooks/useUserAuth';
import { TextError } from '../signIn/TextError';
import { ButtonAuth } from './ButtonAuth';

const FormLogin = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { isUserLogged } = useUserAuth();
	const emailRef = useRef();

	const isInvalidUser = useSelector(userError);
	const isLoading = useSelector(userIsLoading);

	const dispatch = useDispatch();

	useEffect(() => {
		emailRef.current.focus();
	}, []);

	useEffect(() => {
		if (!isUserLogged) return;
		setEmail('');
		setPassword('');
	}, [isUserLogged]);

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(loginUser({ email, password }));
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
					ref={emailRef}
					type='text'
					value={email}
					onChange={(event) => setEmail(event.target.value)}
					variant='flushed'
				/>
			</Box>
			<Box pos='relative'>
				<FormLabel htmlFor='password' m='0' fontWeight='300'>
					CONTRASEÑA
				</FormLabel>
				<Input
					id='password'
					type='password'
					value={password}
					onChange={(event) => setPassword(event.target.value)}
					variant='flushed'
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
