import { IconButton } from '@chakra-ui/react';

export const NavIconButton = ({ icon, onClick = null } = {}) => {
	return (
		<IconButton
			onClick={onClick}
			fontSize='inherit'
			variant='ghost'
			color='white'
			colorScheme='whiteAlpha'
			isRound
			icon={icon}
		/>
	);
};
