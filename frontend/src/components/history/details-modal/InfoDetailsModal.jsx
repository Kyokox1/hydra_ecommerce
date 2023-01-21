import { Flex, Stack, Text } from '@chakra-ui/react';

export const InfoDetailsModal = ({ dateSale, numOrder }) => {
	return (
		<Flex
			flexDir={{ base: 'column', md: 'row' }}
			gap={{ base: '30px', md: '100px' }}
			fontSize='.9rem'
		>
			<Stack>
				<Text>Fecha de Envio</Text>
				<Text>{dateSale}</Text>
			</Stack>
			<Stack>
				<Text>Número de Envio/Guia</Text>
				<Text>{numOrder}</Text>
			</Stack>
		</Flex>
	);
};
