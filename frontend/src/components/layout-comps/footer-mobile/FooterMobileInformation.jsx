import { Flex, Box, Text } from '@chakra-ui/react';
import { BsFillCreditCardFill, BsFillTelephoneFill } from 'react-icons/bs';

export const FooterMobileInformation = () => {
	return (
		<Flex as='section' justify='space-evenly' textAlign='center'>
			<Box
				display='flex'
				flexDir='column'
				alignItems='center'
				maxW='120px'
				gap='10px'
			>
				<BsFillCreditCardFill size='1.3rem' />
				<Text>Medios de Pago Todas las Tarjetas</Text>
			</Box>
			<Box display='flex' flexDir='column' alignItems='center' gap='10px'>
				<BsFillTelephoneFill size='1.3rem' />
				<Text>Atención al Cliente</Text>
			</Box>
		</Flex>
	);
};
