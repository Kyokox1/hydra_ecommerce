import { Flex, Stack, Spinner } from '@chakra-ui/react';

// assets
import bgProducts from '/assets/bg-products.png';

// components and hooks
import { ProductsCardList } from '~/components/products/productsCardList';
import { Filters } from '~/components/products/Filters';
import { useProducts } from '~/hooks/useProducts';
import { useFilters } from '~/hooks/useFilters';
import { ButtonOrange } from '~/components/products/ButtonOrange';

const Home = () => {
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
				<ButtonOrange p='18px 35px' onClick={showMoreProducts}>
					{showAllProducts
						? 'VER MENOS PRODUCTOS'
						: 'VER TODOS LOS PRODUCTOS'}
				</ButtonOrange>
			</Stack>
		</Flex>
	);
};

export default Home;
