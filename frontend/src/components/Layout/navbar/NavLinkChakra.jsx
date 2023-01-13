import { Link, Text, Icon } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const NavLinkChakra = ({ to = '/', children, icon = null, i }) => {
	return (
		<Link
			as={NavLink}
			display='flex'
			alignItems='center'
			justifyContent={{ base: 'center', lg: 'initial' }}
			textDecoration='none'
			gap='10px'
			_hover={{
				textDecoration: 'none',
				color: 'unset'
			}}
			flex={{ base: '1', md: 'none' }}
			to={`${to}`}
		>
			{Boolean(icon) && <Icon as={() => icon[i]} />}

			<Text>{children}</Text>
		</Link>
	);
};
