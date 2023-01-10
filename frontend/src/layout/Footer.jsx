import { Box, Grid, Text, Stack } from '@chakra-ui/react';
import { FooterSubscribe } from '~/components/layout/footer/FooterSubscribe';

import { NavList } from '~/components/layout/NavList';
import FooterSocialMedia from '../components/layout/footer/FooterSocialMedia';

const Footer = () => {
	return (
		<Box
			display={{ base: 'none', lg: 'block' }}
			as='footer'
			color='white'
			py='40px'
		>
			<Grid
				gridTemplateColumns={'repeat(3,minmax(200px,300px))'}
				justifyContent='center'
				justifyItems='center'
				textAlign='center'
				rowGap='50px'
			>
				<Box as='section'>
					<Text>SEGURIDAD</Text>
					<Text color='gray'>Protegemos tus datos personales</Text>
				</Box>
				<Box as='section'>
					<Text>MEDIOS DE PAGO</Text>
					<Text color='gray'>todas las tarjetas</Text>
				</Box>
				<Box as='section'>
					<Text>ENVIOS A TODO EL PAÍS</Text>
					<Text color='gray'>
						Recibe el pedido en tu casa o retíralo en la sucursal de
						Correo más cercana
					</Text>
				</Box>
				<Box
					as='section'
					display='flex'
					flexDir='column'
					gap='5px'
					fontSize='1.2rem'
				>
					<Text>NAVEGACIÓN</Text>
					<Box as='nav' color='gray' textAlign='initial'>
						<NavList direction='column' />
					</Box>
				</Box>
				<Box as='section' fontSize='1.2rem'>
					<Text>CONTACTO</Text>
					<Text color='gray'>0800-12345678</Text>
				</Box>
				<Stack as='section' gap='20px'>
					<FooterSocialMedia />
					<FooterSubscribe />
				</Stack>
			</Grid>
		</Box>
	);
};

export default Footer;
