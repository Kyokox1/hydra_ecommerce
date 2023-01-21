import { ModalFooter, Text, Flex } from '@chakra-ui/react';
import { AiOutlinePrinter } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';

export const FooterDetailsModal = ({ onClose }) => {
	return (
		<ModalFooter display='flex' justifyContent='space-evenly' p='5px'>
			<Flex
				onClick={onClose}
				gap='8px'
				alignItems='center'
				cursor='pointer'
				_hover={{ color: '#ffffff99' }}
			>
				<BiArrowBack size='.975rem' />
				<Text>Ir al listado</Text>
			</Flex>
			<Flex
				onClick={onClose}
				gap='8px'
				alignItems='center'
				cursor='pointer'
				_hover={{ color: '#ffffff99' }}
			>
				<AiOutlinePrinter size='.975rem' />
				<Text>Imprimir</Text>
			</Flex>
		</ModalFooter>
	);
};
