import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const PopoverButton = ({ onClose, route, children }) => {
	return (
		<Link to={route}>
			<Button
				onClick={onClose}
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
