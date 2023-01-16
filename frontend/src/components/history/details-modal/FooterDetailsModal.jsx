import { ModalFooter, Text } from '@chakra-ui/react';

export const FooterDetailsModal = () => {
	return (
		<ModalFooter display='flex' justifyContent='space-evenly' p='5px'>
			<Text>Ir al listado</Text>
			<Text>Imprimir</Text>
		</ModalFooter>
	);
};
