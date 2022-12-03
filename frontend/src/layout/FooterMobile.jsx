import {
	Box,
	Flex,
	Text,
	Stack,
	FormControl,
	Input,
	Button
} from '@chakra-ui/react';
import { AiFillInstagram } from 'react-icons/ai';

import { BsFillCreditCardFill, BsFillTelephoneFill } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const footerNav = [
	'Términos y Condiciones',
	'Política de Privacidad',
	'Contacto',
	'Ayuda'
];

export const FooterMobile = () => {
	return (
		<Flex
			as='footer'
			display={{ base: 'flex', lg: 'none' }}
			flexDir='column'
			color='white'
			py='40px'
			gap='30px'
		>
			<Flex justify='space-evenly' textAlign='center'>
				<Box
					maxW='120px'
					gap='10px'
					display='flex'
					flexDir='column'
					alignItems='center'
				>
					<BsFillCreditCardFill size='1.3rem' />
					<Text>Medios de Pago Todas las Tarjetas</Text>
				</Box>
				<Box
					display='flex'
					flexDir='column'
					alignItems='center'
					gap='10px'
				>
					<BsFillTelephoneFill size='1.3rem' />
					<Text>Atención al Cliente</Text>
				</Box>
			</Flex>

			<Flex align='center'>
				<Flex flexDir='column'>
					<Text>SUSCRÍBITE!</Text>
					<Text>Recibe novedades y promociones</Text>
				</Flex>
				<FormControl as='form' display='flex'>
					<Input
						_placeholder='ingrese su e-mail'
						variant='unstyled'
					/>
					<Button type='submit'>ok</Button>
				</FormControl>
			</Flex>

			<Flex justify='center' gap='40px' align='center'>
				<FaFacebookF size='1.6rem' />
				<AiFillInstagram size='2rem' />
			</Flex>

			<Flex justify='space-around' fontSize='.8rem' align='center'>
				{footerNav.map((element) => (
					<Text key={`footer ${element}`} w='min-content'>
						{element}
					</Text>
				))}
			</Flex>
		</Flex>
	);
};
