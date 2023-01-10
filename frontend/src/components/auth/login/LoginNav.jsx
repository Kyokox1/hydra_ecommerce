import { Stack, Link as LinkChakra } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { PATHS } from '~/constans/pathsRoutes';

const LoginNav = () => {
	return (
		<Stack textAlign='center'>
			<LinkChakra
				to={`/${PATHS.REGISTER}`}
				as={Link}
				fontWeight='300'
				_hover={{
					textDecoration: 'none',
					color: '#E68C11'
				}}
			>
				Olvidaste Contraseña
			</LinkChakra>
			<LinkChakra
				to={`/${PATHS.REGISTER}`}
				as={Link}
				textDecoration='none'
				fontWeight='300'
				_hover={{
					textDecoration: 'none',
					color: '#E68C11'
				}}
			>
				Crear una cuenta
			</LinkChakra>
		</Stack>
	);
};

export default LoginNav;
