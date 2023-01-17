import { useState, useCallback } from 'react';
import {
	Flex,
	Stack,
	Box,
	Text,
	StackDivider,
	Spinner
} from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';

import { useUserAuth } from '~/hooks/useUserAuth';
import { useWindowSize } from '~/hooks/useWindowSize';
import { ProductCounter } from '~/components/product/ProductCounter';
import { ProductImg } from '~/components/product/ProductImg';
import { ButtonOrange } from '~/components/home/ButtonOrange';
import { getSingleProduct } from '~/services/products';

// ? redux
import { useDispatch, useSelector } from 'react-redux';
import {
	addProduct,
	incrementProductCount,
	productsInCart
} from '~/features/products/productsCartSlice';
import { useFetch } from '~/hooks/useFetch';
import { currencyFormatter } from '~/services/prices/currencyFormatter';

const Product = () => {
	// TODO Refactorizar codigo y dividir en componentes
	const { isUserAuthenticated } = useUserAuth();
	const { width } = useWindowSize();
	const { id } = useParams();
	const { product, isLoading } = useFetch(() => getSingleProduct({ id }));
	const [count, setCount] = useState(0);
	const productsCart = useSelector(productsInCart);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { name, price, cost, code, stock } = product;
	const priceFormat = currencyFormatter({ value: price });
	const costFormat = currencyFormatter({ value: cost });

	const findProductInCart = useCallback(() => {
		return productsCart.find(
			(productElement) => productElement.id === product.id
		);
	}, [product, productsCart]);

	const stockCart = findProductInCart()?.stock ?? stock;

	const handleAddToCart = (product) => {
		if (!isUserAuthenticated) return navigate('/login');

		const isProductExistInCart = productsCart.some(
			(productElement) => product.id === productElement.id
		);
		const productCart = { ...product, count, stock: stock - count };

		if (!isProductExistInCart) {
			dispatch(addProduct(productCart));
			setCount(0);
			return;
		}

		dispatch(incrementProductCount({ id: product.id, count }));
		setCount(0);
	};

	return (
		<Flex
			as='main'
			pt='120px'
			pb='50px'
			color='white'
			minH='100vh'
			justify='center'
			align='center'
			gap={{ base: '3rem', lg: '10rem' }}
			flexDir={{ base: 'column-reverse', lg: 'row' }}
		>
			{isLoading ? (
				<Spinner size='xl' alignSelf='center' />
			) : (
				<>
					<Stack
						as='section'
						flexBasis='40%'
						align='center'
						justifyContent='space-between'
						gap='20px'
						textAlign={{ base: 'center', lg: 'initial' }}
						fontSize={{ base: '.875rem', sm: '1rem' }}
						px={{ base: '15px', lg: '0' }}
					>
						<ProductImg display={{ base: 'none', lg: 'block' }} />

						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Suspendisse mattis elit ac tortor gravida
							sodales. Curabitur id ex non libero efficitur
							consectetur vel vitae ipsum. Nullam eros tortor,
							malesuada vitae justo eu, molestie auctor neque. Ut
							rhoncus tortor gravida felis molestie scelerisque.
							Pellentesque maximus velit purus, non aliquet dolor
							mollis sit amet. Maecenas cursus mi orci, ut
							bibendum purus lobortis in. In commodo ac dolor in
							mattis. Nulla facilisi.
						</Text>
					</Stack>

					{/* Second section */}
					<Flex
						as='section'
						align={{ base: 'center', lg: 'start' }}
						gap={{
							base: '10px',
							sm: '30px',
							md: '50px',
							lg: 'none'
						}}
						px={{ base: '15px', md: '0' }}
					>
						<ProductImg display={{ base: 'block', lg: 'none' }} />

						<Stack
							divider={
								<StackDivider
									display={{ base: 'none', md: 'block' }}
								/>
							}
							flexBasis='25%'
							align='center'
							gap='40px'
						>
							<Flex
								direction='column'
								gap='15px'
								fontSize={{ base: '.875rem', sm: '1.2rem' }}
								fontWeight='300'
							>
								<Box>
									<Text>{name?.toUpperCase()}</Text>
									<Stack
										direction='row'
										gap='5px'
										divider={<StackDivider />}
										whiteSpace='nowrap'
									>
										<Text>EN STOCK: {stockCart}</Text>
										<Text>COD: {code}</Text>
									</Stack>
								</Box>
								<Box pl='10px'>
									<Text
										color='#B4B4B4'
										textDecor='line-through'
										fontSize={{ base: '.7rem', sm: '1rem' }}
									>
										{priceFormat}
									</Text>
									<Text>{costFormat}</Text>
								</Box>
							</Flex>
							{/* Second section */}
							<Flex
								w='100%'
								justify={{ base: 'start', md: 'center' }}
							>
								<Stack
									flexDir={{
										base: 'row-reverse',
										md: 'column'
									}}
									alignItems='center'
									gap='8px'
								>
									<Text
										display={{ base: 'none', lg: 'block' }}
										fontWeight='300'
									>
										CANTIDAD
									</Text>
									{/* contador */}
									<ProductCounter
										count={count}
										setCount={setCount}
										stockCart={stockCart}
									/>
									{/* contador */}
									<ButtonOrange
										onClick={() => handleAddToCart(product)}
										disabled={Boolean(!count)}
										p={{
											base: '10px 5px',
											md: '18px 35px'
										}}
										color='black'
									>
										{width >= 768
											? 'AGREGAR AL CARRITO'
											: 'COMPRAR'}
									</ButtonOrange>
								</Stack>
								<Stack></Stack>
							</Flex>
						</Stack>
					</Flex>
				</>
			)}
		</Flex>
	);
};

export default Product;
