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

	return (
		<Grid
			as='section'
			w='100%'
			gridTemplateColumns='repeat(auto-fill, minmax(160px,1fr))'
			gap='15px'
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
