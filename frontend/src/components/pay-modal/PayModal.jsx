import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton
} from '@chakra-ui/react';

import { PayModalBody } from './PayModalBody';
import { PayModalFooter } from './PayModalFooter';

export const PayModal = ({ isOpen, onClose }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} size='2xl' isCentered>
			<ModalOverlay />
			<ModalContent
				bgColor='#000000'
				color='white'
				border='1px solid white'
				p='30px'
			>
				<ModalHeader borderBottom='1px solid white'>
					Tarjeta de crédito débito
				</ModalHeader>
				<ModalCloseButton />
				{/* body */}
				<ModalBody px='0' pt='30px'>
					<PayModalBody onClose={onClose} />
				</ModalBody>
				{/* body */}
				{/* footer */}
				<PayModalFooter />
				{/* footer */}
			</ModalContent>
		</Modal>
	);
};
