import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	ModalFooter,
	Text,
	Stack,
	Flex,
	Textarea
} from '@chakra-ui/react';
import { ButtonOrange } from '../home/ButtonOrange';

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
					{/*  */}
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
					{/*  */}

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
						<Flex
							as='form'
							flexDir={{ base: 'column', md: 'row' }}
							gap={{ base: '20px', md: '0' }}
							fontSize='.9rem'
							justify='space-evenly'
							textAlign='center'
						>
							<Stack>
								<Text>
									Que puntuación le otorgas a tu compra
								</Text>
							</Stack>
							<Stack>
								<Text as='label' htmlFor='commentary'>
									Escribe un comentario
								</Text>
								<Textarea
									id='commentary'
									background='#FFFFFF26'
									fontSize='.9rem'
									maxH='80px'
								/>
							</Stack>
							<Flex alignSelf='center'>
								<ButtonOrange
									p={{
										base: '18px 120px',
										md: '12px 25px'
									}}
									color='black'
								>
									Enviar
								</ButtonOrange>
							</Flex>
						</Flex>
						{/* form */}
					</Stack>
				</ModalBody>
				{/* body */}
				{/* footer */}
				<ModalFooter
					display='flex'
					justifyContent='space-evenly'
					p='5px'
				>
					<Text>Ir al listado</Text>
					<Text>Imprimir</Text>
				</ModalFooter>
				{/* footer */}
			</ModalContent>
		</Modal>
	);
};
