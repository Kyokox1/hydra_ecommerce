import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react';

import product from '../../assets/mock-product.png';

export const ProductItem = ({
	img,
	name = 'CREMA DE CHOCOLATE WHISKY 12 AÑOS',
	price = '100.000,00',
	prevPrice,
	handleAddProduct
}) => {
	return (
		<Box
			display='flex'
			justifyContent='space-between'
			alignItems='center'
			flexDir='column'
			bgColor='rgba(243, 243, 243, 0.09)'
			textAlign='center'
			p='8px'
			borderRadius='4px'
		>
			<Image src={product} alt='product' />
			<Stack fontSize='.875rem'>
				<Heading as='h3' fontWeight='100' fontSize='inherit'>
					{name}
				</Heading>
				<Text fontWeight='100' textDecoration='line-through'>
					{prevPrice}
				</Text>
				<Text fontWeight='100'>{price}</Text>
			</Stack>
			<Button
				onClick={handleAddProduct}
				variant='ghost'
				h='max-content'
				px='25px'
				py='12px'
				fontSize='0.875rem'
				fontWeight='200'
				bgColor='#D9D9D9'
				color='black'
				lineHeight='0'
			>
				COMPRAR
			</Button>
		</Box>
	);
};
