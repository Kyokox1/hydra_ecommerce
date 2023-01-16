import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	Text,
	Stack
} from '@chakra-ui/react';
import { ComentaryForm } from './ComentaryForm';
import { FooterDetailsModal } from './FooterDetailsModal';
import { InfoDetailsModal } from './InfoDetailsModal';

export const DetailsModal = ({ isOpen, onClose, contentModal }) => {
	const { numOrder, dateSale } = contentModal;

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			size={{ base: 'sm', sm: 'xl', md: '3xl' }}
			isCentered={{ base: false, md: true }}
		>
			<ModalOverlay />
			<ModalContent
				bgColor='#000000'
				color='white'
				border='1px solid white'
				p='30px'
			>
				<ModalHeader fontSize='1.1rem' borderBottom='1px solid white'>
					DETALLES DE ENVIO
				</ModalHeader>
				<ModalCloseButton />
				{/* body */}
				<ModalBody px='0' pt='30px'>
					<InfoDetailsModal dateSale={dateSale} numOrder={numOrder} />

					<Stack>
						<Text
							fontSize='1.1rem'
							fontWeight='700'
							p='25px 0 20px 25px'
							borderBottom='1px solid white'
						>
							EVALUA ESTA COMPRA
						</Text>
						{/* form */}
						<ComentaryForm />
						{/* form */}
					</Stack>
				</ModalBody>
				{/* body */}
				{/* footer */}
				<FooterDetailsModal />
				{/* footer */}
			</ModalContent>
		</Modal>
	);
};
