import { FormControl, Input, Flex } from '@chakra-ui/react';
import { ButtonOrange } from '../products/ButtonOrange';

export const PayModalBody = ({ onClose }) => {
	return (
		<FormControl as='form' display='flex' flexDir='column' gap='20px'>
			<Flex flexDir='column' gap='10px'>
				<Input placeholder='Número de la tarjeta' />
				<Flex gap='10px'>
					<Input placeholder='Titular de la tarjeta' flex='4'></Input>
					<Input placeholder='Vencimiento (MM/AA)' flex='3'></Input>
					<Input placeholder='CVV' flex='2'></Input>
				</Flex>
			</Flex>
			<Flex justify='flex-end'>
				<ButtonOrange onClick={onClose} color='black'>
					ACEPTAR
				</ButtonOrange>
			</Flex>
		</FormControl>
	);
};
