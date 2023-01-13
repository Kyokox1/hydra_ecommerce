import { Stack, Text, Input } from '@chakra-ui/react';

export const PresentDedication = () => {
	return (
		<Stack gap='20px' align={{ base: 'center', lg: 'initial' }}>
			<Text>DEDICATORIA PARA REGALO</Text>
			<Input
				as='textarea'
				minH='8rem'
				maxH='8rem'
				w={{ base: '90%', lg: '100%' }}
				p='15px'
			/>
		</Stack>
	);
};
