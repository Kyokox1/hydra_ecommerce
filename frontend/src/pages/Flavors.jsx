import { useCallback, useState, useContext, useEffect } from 'react';
import { Flex, Image, Stack, Spinner, Text } from '@chakra-ui/react';
import { ButtonGray } from '~/components/products/ButtonGray';
import { Filters } from '~/components/products/Filters';
import { ProductsCardList } from '~/components/products/productsCardList';
import {
	isLoadingProducts,
	productsStore,
	searchProducts,
	getProducts
} from '~/features/products/getProductsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { SearchContext } from '~/context/searchContext';

const Flavors = () => {
	// TODO hook
	const productsList = useSelector(productsStore);
	const isLoading = useSelector(isLoadingProducts);
	const dispatch = useDispatch();

	const [showAllProducts, setShowAllProducts] = useState(false);
	const [selectFilters, setSelectFilters] = useState('');
	const { isSearching, setIsSearching } = useContext(SearchContext);

	// ? funcion que recorta el array de productos en la vista
	const productsSlice = productsList.slice(0, 10);

	// ? Mostrar mas productos en la view
	const showMoreProducts = () => {
		setShowAllProducts((prevState) => !prevState);
	};

	const products = useCallback(
		() => (showAllProducts ? productsList : productsSlice),
		[showAllProducts, selectFilters, productsList]
	);
	// TODO hook

	// ? llamada para traer todos los productos o los filtros
	useEffect(() => {
		if (selectFilters) {
			dispatch(
				searchProducts({ search: selectFilters, name: 'category_id' })
			);
			setIsSearching(false);
			return;
		}
		if (!isSearching) dispatch(getProducts());
	}, [selectFilters, isSearching]);
	return (
		<Flex
			as='main'
			flexDir='column'
			pt='120px'
			color='white'
			minH='100vh'
			justify='center'
			align='center'
			gap='10rem'
		>
			<Image alt='banner' />
			{/* filters */}
			<Flex w='100%'>
				<Stack w='20%'>
					<Text>asdasd</Text>
				</Stack>
				<Stack
					flex='1'
					maxW='1040px'
					alignItems='center'
					pl='50px'
					gap='80px'
				>
					<Filters
						selectFilters={selectFilters}
						setSelectFilters={setSelectFilters}
					/>
					<Flex minH='100vh' w='100%' justify='center'>
						{isLoading ? (
							<Spinner size='xl' alignSelf='center' />
						) : (
							<ProductsCardList products={products} />
						)}
					</Flex>
					<ButtonGray onClick={showMoreProducts}>
						{showAllProducts
							? 'VER MENOS PRODUCTOS'
							: 'VER TODOS LOS PRODUCTOS'}
					</ButtonGray>
				</Stack>
			</Flex>

			{/* productList */}
		</Flex>
	);
};

export default Flavors;
