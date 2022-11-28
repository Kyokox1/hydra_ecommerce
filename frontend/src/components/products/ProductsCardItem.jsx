import {
	Box,
	Heading,
	Image,
	Stack,
	Text,
	Link as LinkChakra
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

// components
import { ButtonOrange } from './ButtonOrange';

// assets
import product from '/assets/mock-product.png';

export const ProductsCardItem = ({
	img,
	id,
	name,
	price,
	prevPrice,
	handleAddProduct,
	stock,
	count
}) => {
	const canBuyProduct = useMemo(() => stock <= count(), [count, stock]);

	return (
		<Box
			as='article'
			display='flex'
			flexDir='column'
			justifyContent='space-between'
			alignItems='center'
			p='15px 10px'
			borderRadius='4px'
			textAlign='center'
			bgColor='rgba(243, 243, 243, 0.09)'
		>
			<Link to={`/product/${id}`}>
				<Image src={product} alt={`${name}`} />
			</Link>
			<Stack fontSize='.875rem' pb='10px'>
				<LinkChakra
					_hover={{ color: '#E56C10' }}
					transition={'color .3s ease'}
					as={Link}
					to={`/product/${id}`}
				>
					<Heading as='h3' fontWeight='100' fontSize='inherit'>
						{name}
					</Heading>
				</LinkChakra>
				<Text fontWeight='100' textDecoration='line-through'>
					{prevPrice}
				</Text>
				<Text fontWeight='100'>{price}</Text>
			</Stack>
			<ButtonOrange onClick={handleAddProduct} disabled={canBuyProduct}>
				COMPRAR
			</ButtonOrange>
		</Box>
	);
};
