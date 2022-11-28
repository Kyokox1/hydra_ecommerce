import { useEffect, useState, useCallback, useContext } from 'react';
import { Flex, Stack, Spinner } from '@chakra-ui/react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import {
	getProducts,
	isLoadingProducts,
	productsStore,
	searchProducts
} from '~/features/products/getProductsSlice';

// assets
import bgProducts from '/assets/bg-products.png';

// components and hooks
import { ProductsCardList } from '~/components/products/productsCardList';
import { Filters } from '~/components/products/Filters';
import { ButtonGray } from '~/components/products/ButtonGray';
import { SearchContext } from '~/context/searchContext';

export const Productos = () => {
	// TODO Refactorizar código esta un despelote.
	const productsList = useSelector(productsStore);
	const isLoading = useSelector(isLoadingProducts);
	const dispatch = useDispatch();

	const [showAllProducts, setShowAllProducts] = useState(false);
	const [selectFilters, setSelectFilters] = useState('');
	const { isSearch, setIsSearch } = useContext(SearchContext);

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

	// ? llamada para traer todos los productos o los filtros
	useEffect(() => {
		if (selectFilters) {
			dispatch(
				searchProducts({ search: selectFilters, name: 'category_id' })
			);
			setIsSearch(false);
			return;
		}
		if (!isSearch) dispatch(getProducts());
	}, [selectFilters]);

	return (
		<Flex
			as='main'
			minH='100vh'
			bgPos='right'
			bgSize='contain'
			bgRepeat='no-repeat'
			bgImage={bgProducts}
			color='white'
			pb='50px'
			pt='120px'
		>
			<Stack
				w='80%'
				maxW='1040px'
				alignItems='center'
				pl='100px'
				gap='30px'
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
	);
};
