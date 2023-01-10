import { PopoverBody, PopoverContent, Button, Spinner } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { userIsLoading } from '~/features/user/userSlice';
import { PopoverButton } from './PopoverButton';

export const PopoverAuthUser = ({ isUserAuthenticated, handleLogout, onClose }) => {
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
						<PopoverButton onClose={onClose} route='/login'>
							Iniciar Sesión
						</PopoverButton>
						<PopoverButton onClose={onClose} route='/signIn'>
							Registrarse
						</PopoverButton>
					</>
				) : (
					<>
						<Button
							onClick={handleLogout}
							w='100%'
							variant='ghost'
							colorScheme='whiteAlpha'
							color='white'
						>
							{isLoadingUser ? (
								<Spinner colorScheme='white' />
							) : (
								'Cerrar Sesión'
							)}
						</Button>
					</>
				)}
			</PopoverBody>
		</PopoverContent>
	);
};
