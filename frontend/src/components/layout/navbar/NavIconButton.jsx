import { IconButton } from '@chakra-ui/react';

export const NavIconButton = ({ icon, onClick = null, ariaLabel } = {}) => {
	return (
		<IconButton
			onClick={onClick}
			fontSize='inherit'
			variant='ghost'
			color='white'
			colorScheme='whiteAlpha'
			isRound
			aria-label={ariaLabel}
			icon={icon}
		/>
	);
};
