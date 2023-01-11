import { Stack, Text, Input } from '@chakra-ui/react';

export const PresentDedication = () => {
	return (
		<Stack gap='20px'>
			<Text>DEDICATORIA PARA REGALO</Text>
			<Input as='textarea' minH='8rem' maxH='8rem' w='100%' p='15px' />
		</Stack>
	);
};
