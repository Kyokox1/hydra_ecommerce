import { Text } from '@chakra-ui/react';

export const TextError = ({ children }) => {
	return (
		<Text
			as='span'
			pos='absolute'
			bottom='-22px'
			left='0'
			fontSize='xs'
			fontWeight='400'
			color='red'
		>
			{children}
		</Text>
	);
};
