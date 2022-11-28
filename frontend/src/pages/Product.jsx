import { useEffect, useState, useCallback } from 'react';
import {
	Flex,
	Stack,
	Box,
	Image,
	Text,
	Button,
	StackDivider,
	Spinner
} from '@chakra-ui/react';

import { useParams, useNavigate } from 'react-router-dom';
import { getSingleProduct } from '~/services/products';

// assets
import productImg from '/assets/img-product.png';
import { useDispatch, useSelector } from 'react-redux';
import {
	addProduct,
	incrementProductCount,
	productsInCart
} from '~/features/products/productsCartSlice';

import { useUserAuth } from '~/hooks/useUserAuth';
import { ButtonGray } from '~/components/products/ButtonGray';

export const Product = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const productsCart = useSelector(productsInCart);
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [count, setCount] = useState(0);
	const navigate = useNavigate();

	const { name, description, image, price, cost, code, stock } = product;

	const findProductInCart = useCallback(() => {
		return productsCart.find(
			(productElement) => productElement.id === product.id
		);
	}, [product, productsCart]);

	// const stockCart = findProductInCart()?.stock || stock;

	const stockCart = () => {
		if (findProductInCart()?.stock === 0) return 0;
		if (!findProductInCart()?.stock) return stock;
		return findProductInCart()?.stock;
	};

	const handleCounter = (text) => {
		if (text === 'res' && count > 0) setCount((prevCount) => prevCount - 1);
		if (text === 'sum' && count < stockCart())
			setCount((prevCount) => prevCount + 1);
	};

	const { isUserLogged } = useUserAuth();

	console.log(productsCart);
	console.log(id);

	const handleAddToCart = (product) => {
		if (!isUserLogged) return navigate('/');

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

	useEffect(() => {
		getSingleProduct({ id }).then((data) => {
			setProduct(data);
			setIsLoading(false);
		});
	}, []);

	return (
		<Flex
			as='main'
			pt='120px'
			color='white'
			minH='100vh'
			justify='center'
			align='center'
			gap='10rem'
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
					>
						<Box
							maxW='300px'
							border='1.5rem solid rgba(243, 243, 243, 0.09);'
						>
							<Image src={productImg} alt={name} />
						</Box>
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
					<Stack
						as='section'
						divider={<StackDivider />}
						flexBasis='25%'
						align='center'
						gap='40px'
					>
						<Flex direction='column' gap='15px'>
							<Box>
								<Text fontSize='1.2rem' fontWeight='300'>
									{name?.toUpperCase()}
								</Text>
								<Stack
									direction='row'
									gap='5px'
									divider={<StackDivider />}
								>
									<Text fontSize='1.2rem' fontWeight='300'>
										EN STOCK: {stockCart()}
									</Text>
									<Text fontSize='1.2rem' fontWeight='300'>
										COD: {code}
									</Text>
								</Stack>
							</Box>
							<Box pl='10px'>
								<Text
									color='#B4B4B4'
									fontWeight='300'
									textDecor='line-through'
								>
									${price}
								</Text>
								<Text fontSize='1.2rem' fontWeight='300'>
									${cost}
								</Text>
							</Box>
						</Flex>
						{/* Second section */}
						<Flex align='center'>
							<Stack alignItems='center' gap='8px'>
								<Text fontWeight='300'>CANTIDAD</Text>
								{/* contador */}
								<Flex align='center' gap='15px'>
									<Button
										onClick={() => handleCounter('res')}
										bgColor='#D9D9D9'
										color='black'
										fontWeight='700'
										borderRadius='50%'
										size='sm'
									>
										-
									</Button>
									<Text textAlign='center' w='20px'>
										{count}
									</Text>
									<Button
										onClick={() => handleCounter('sum')}
										bgColor='#D9D9D9'
										color='black'
										fontWeight='700'
										borderRadius='50%'
										size='sm'
									>
										+
									</Button>
								</Flex>
								{/* contador */}
								<ButtonGray
									onClick={() => handleAddToCart(product)}
									disabled={Boolean(!count)}
								>
									AGREGAR AL CARRITO
								</ButtonGray>
							</Stack>
							<Stack></Stack>
						</Flex>
					</Stack>
				</>
			)}
		</Flex>
	);
};
