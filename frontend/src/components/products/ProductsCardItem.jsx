import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { useMemo } from 'react';

import product from '/assets/mock-product.png';

export const ProductsCardItem = ({
	img,
	name = 'CREMA DE CHOCOLATE WHISKY 12 AÑOS',
	price = '100.000,00',
	prevPrice,
	handleAddProduct,
	stock,
	count
}) => {
	const canBuyProduct = useMemo(() => stock <= count(), [count, stock]);

	return (
		<Box
			display='flex'
			flexDir='column'
			justifyContent='space-between'
			alignItems='center'
			p='15px 10px'
			borderRadius='4px'
			textAlign='center'
			bgColor='rgba(243, 243, 243, 0.09)'
		>
			<Image src={product} alt='product' />
			<Stack fontSize='.875rem' pb='10px'>
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
				disabled={canBuyProduct}
				h='max-content'
				p='12px 25px'
				fontSize='0.875rem'
				fontWeight='600'
				bgColor='#E68C11'
				border='1px solid #D7B781'
				lineHeight='0'
				boxShadow='0px 4px 4px rgba(255, 255, 255, 0.25)'
				_hover={{ bgColor: '#E56C10' }}
			>
				COMPRAR
			</Button>
		</Box>
	);
};
