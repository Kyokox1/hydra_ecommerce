import { Flex, Box, Text, Image } from '@chakra-ui/react';

import { CounterCart } from './CounterCart';
import bgProduct from '/assets/img-product.png';

export const CartProductItem = ({ name, price, cost, id, count, stock }) => {
	return (
		<Flex as='article' gap='30px'>
			<Box
				// flex='3'
				w='100px'
				border='.5rem solid rgba(243, 243, 243, 0.09)'
			>
				<Image src={bgProduct} alt={name} />
			</Box>
			<Flex
				//  flex='4'
				flexDir='column'
				justify='space-evenly'
			>
				<Text>{name}</Text>
				<Text>${cost}</Text>
				<CounterCart initialCount={count} id={id} stock={stock} />
			</Flex>
		</Flex>
	);
};
