import { Text } from '@chakra-ui/react';

export const TextError = ({ children }) => {
	return (
		<Text as='span' pos='absolute' bottom='-20px' fontSize='xs' color='red'>
			{children}
		</Text>
	);
};
