import { Grid } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { productsInCart } from '~/features/products/productsCartSlice';
import { ProductsCardItem } from './ProductsCardItem';

export const ProductsCardList = ({ products }) => {
	const productsCart = useSelector(productsInCart);

	const countProductInCart = (id) => {
		const productCart = productsCart.find((product) => product.id === id);
		if (!productCart) return 0;
		const { count } = productCart;
		return count;
	};

	const halfOfProducts = Math.round(products().length / 2);

	return (
		<Grid
			as='section'
			w='100%'
			minW={{ base: 'none', lg: '878px' }}
			maxW='1030px'
			gridTemplateColumns={{
				base: `repeat(${halfOfProducts}, minmax(180px,1fr))`,
				md: 'repeat(auto-fill, minmax(160px,1fr))'
			}}
			gap='15px'
			px={{ base: '20px', md: '0' }}
			overflow='auto'
			overscrollBehaviorX={{ base: 'contain', md: 'none' }}
		>
			{products().map((product) => (
				<ProductsCardItem
					key={`product-${product.id}`}
					id={product.id}
					name={product.name}
					price={product.cost}
					prevPrice={product.price}
					stock={product.stock}
					count={() => countProductInCart(product.id)}
				/>
			))}
		</Grid>
	);
};
