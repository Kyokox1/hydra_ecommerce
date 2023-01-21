import { ModalFooter, Text, Flex, Image } from '@chakra-ui/react';

import orangeCard from '/assets/cards/orange-card.svg';
import blueCard from '/assets/cards/blue-card.svg';
import skyBlueCard from '/assets/cards/sky-blue-card.svg';
import yellowCard from '/assets/cards/yellow-card.svg';

export const PayModalFooter = () => {
	return (
		<ModalFooter
			display='flex'
			flexDir='column'
			alignItems='flex-start'
			p='5px'
		>
			<Text pl='20px'>Tarjetas aceptadas</Text>
			<Flex>
				<Image src={blueCard} alt='blue-card' pr='5px' />
				<Image src={orangeCard} alt='orange-card' />
				<Image src={skyBlueCard} alt='sky-blue-card' />
				<Image src={yellowCard} alt='yellow-card' />
			</Flex>
		</ModalFooter>
	);
};
