import { PopoverBody, PopoverContent, Spinner, Text } from '@chakra-ui/react';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { GoSignIn } from 'react-icons/go';

import { PopoverButton } from './PopoverButton';
import { PATHS } from '~/constans/pathsRoutes';

//  ? redux
import { useSelector } from 'react-redux';
import { userIsLoading } from '~/features/user/userSlice';

export const PopoverAuthUser = ({
	isUserAuthenticated,
	handleLogout,
	onClose
}) => {
	const isLoadingUser = useSelector(userIsLoading);

	return (
		<PopoverContent bgColor='#000000' w='200px'>
			<PopoverBody
				display='flex'
				flexDir='column'
				fontSize='1rem'
				textAlign='center'
			>
				{!isUserAuthenticated ? (
					<>
						<PopoverButton onClick={onClose} route={PATHS.LOGIN}>
							<BiLogIn size='1.4rem' />
							<Text ml='8px'>Iniciar Sesión </Text>
						</PopoverButton>
						<PopoverButton onClick={onClose} route={PATHS.REGISTER}>
							<GoSignIn size='1.3rem' />
							<Text ml='8px'>Registrarse</Text>
						</PopoverButton>
					</>
				) : (
					<>
						<PopoverButton onClick={handleLogout}>
							{isLoadingUser ? (
								<Spinner colorScheme='white' />
							) : (
								<>
									<BiLogOut size='1.3rem' />
									<Text ml='8px'>Cerrar Sesión</Text>
								</>
							)}
						</PopoverButton>
					</>
				)}
			</PopoverBody>
		</PopoverContent>
	);
};
