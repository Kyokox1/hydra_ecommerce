import { Stack, Box, Text } from '@chakra-ui/react';
export const PaymentOptions = () => {
	return (
		<Stack gap='10px'>
			<Text pb='10px'>MEDIO DE PAGO</Text>
			<Box border='1px solid white' p='12px'>
				Tarjeta de crédito debito
			</Box>
			<Box border='1px solid white' p='12px'>
				Rapipago o Pago fácil
			</Box>
			<Box border='1px solid white' p='12px'>
				Mercado pago
			</Box>
		</Stack>
	);
};
