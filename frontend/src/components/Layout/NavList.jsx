import { Flex } from '@chakra-ui/react';
import { NavLinkChakra } from './NavLinkChakra';

const navElement = [
	{ name: 'inicio', path: '/' },
	{ name: 'sabores', path: 'flavors' },
	{ name: 'promociones', path: 'promotions' }
];

export const NavList = ({ direction = 'row', gap = '0', mayus = false }) => {
	return (
		<Flex direction={direction} flex='1' justify='space-around' gap={gap}>
			{navElement.map(({ name, path }) => (
				<NavLinkChakra key={`nav-${name}`} to={path}>
					{mayus ? name.toUpperCase() : name}
				</NavLinkChakra>
			))}
		</Flex>
	);
};
