import { Box, Flex, Grid, Text } from '@chakra-ui/react';

import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

import { NavList } from '~/components/Layout/NavList';

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
				<Box>
					<Text>SEGURIDAD</Text>
					<Text color='gray'>Protegemos tus datos personales</Text>
				</Box>
				<Box>
					<Text>MEDIOS DE PAGO</Text>
					<Text color='gray'>todas las tarjetas</Text>
				</Box>
				<Box>
					<Text>ENVIOS A TODO EL PAIS</Text>
					<Text color='gray'>
						Recibe el pedido en tu casa o retiralo en la sucursal de
						Correo mas cercana
					</Text>
				</Box>
				<Box
					display='flex'
					flexDir='column'
					gap='5px'
					fontSize='1.2rem'
				>
					<Text>NAVEGACION</Text>
					<Box as='nav' color='gray' textAlign='initial'>
						<NavList direction='column' />
					</Box>
				</Box>
				<Box fontSize='1.2rem'>
					<Text>CONTACTO</Text>
					<Text color='gray'>0800-12345678</Text>
				</Box>
				<Box fontSize='1.2rem'>
					<Text>REDES SOCIALES</Text>
					<Flex
						color='gray'
						gap='10px'
						alignItems='center'
						justify='center'
					>
						<FaFacebookF size='1.6rem' />
						<AiFillInstagram size='2rem' />
					</Flex>
				</Box>
			</Grid>
		</Box>
	);
};

export default Footer;
