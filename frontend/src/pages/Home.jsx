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
import { useProducts } from '~/hooks/useProducts';
import { useFilters } from '~/hooks/useFilters';

const Home = () => {
	// TODO Refactorizar código.
	const { selectFilters, setSelectFilters } = useFilters();
	const { products, isLoading, showMoreProducts, showAllProducts } =
		useProducts({ selectFilters });

	return (
		<Flex
			as='main'
			minH='100vh'
			bgPos='right'
			bgSize='contain'
			bgRepeat='no-repeat'
			bgImage={bgProducts}
			color='white'
			pb='80px'
			pt='150px'
		>
			<Stack
				w='80%'
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
	);
};

export default Home;
