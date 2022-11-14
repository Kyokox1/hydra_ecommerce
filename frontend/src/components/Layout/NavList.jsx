import { Flex } from '@chakra-ui/react';
import { NavLinkChakra } from './NavLinkChakra';

const navElement = [
	{ name: 'inicio', path: '/' },
	{ name: 'productos', path: 'productos' },
	{ name: 'promociones', path: 'promociones' },
	{ name: 'comprar', path: 'como compro' },
	{ name: 'contacto', path: 'contacto' }
];

export const NavList = ({ direction = 'row', gap = '0', mayus = false }) => {
	return (
		<Flex direction={direction} gap={gap}>
			{navElement.map(({ name, path }) => (
				<NavLinkChakra key={`nav-${name}`} to={path}>
					{mayus ? name.toUpperCase() : name}
				</NavLinkChakra>
			))}
		</Flex>
	);
};
