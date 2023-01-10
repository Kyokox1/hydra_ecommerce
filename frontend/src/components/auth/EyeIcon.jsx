import { IconButton } from '@chakra-ui/react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export const EyeIcon = ({ onClick, showPassword }) => {
	return (
		<IconButton
			onClick={onClick}
			aria-label='show password'
			icon={showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
			pos='absolute'
			right='0'
			bottom='0'
			isRound
			bgColor='transparent'
			_hover={{ background: '#ffffff10' }}
			_focus={{ background: '#ffffff10' }}
		/>
	);
};
