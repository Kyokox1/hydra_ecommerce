import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const PopoverButton = ({ onClick, route, children }) => {
	return (
		<Link to={route}>
			<Button
				onClick={onClick}
				w='100%'
				variant='ghost'
				colorScheme='whiteAlpha'
				color='white'
			>
				{children}
			</Button>
		</Link>
	);
};
