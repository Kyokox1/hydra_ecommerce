import { Grid } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
	addProduct,
	incrementProduct,
	productsInCart
} from '~/features/products/productsCartSlice';
import { useUserAuth } from '~/hooks/useUserAuth';
import { ProductsCardItem } from './ProductsCardItem';

export const ProductsCardList = ({ products }) => {
	// const dispatch = useDispatch();
	// const navigate = useNavigate();
	// const { isUserLogged } = useUserAuth();
	const productsCart = useSelector(productsInCart);

	// ? agregar productos al carrito
	// const handleAddProduct = (product) => {
	// 	if (!isUserLogged) return navigate('/');

	// 	const { name, price, cost, stock, id, description, image } = product;
	// 	const isProductExistInCart = productsCart.some(
	// 		(productElement) => product.id === productElement.id
	// 	);
	// 	const productCart = {
	// 		id,
	// 		name,
	// 		description,
	// 		price,
	// 		cost,
	// 		stock,
	// 		image,
	// 		count: 1
	// 	};

	// 	if (!isProductExistInCart) return dispatch(addProduct(productCart));

	// 	dispatch(incrementProduct(product));
	// };

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
