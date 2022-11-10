import { Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const NavLinkChakra = ({ to = '/', children }) => {
	return (
		<Link
			as={NavLink}
			textDecoration='none'
			_hover={{
				textDecoration: 'none',
				color: 'unset'
			}}
			to={`${to}`}
		>
			{children}
		</Link>
	);
};
