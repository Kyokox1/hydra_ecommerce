import { Flex, Stack, Spinner, Box } from '@chakra-ui/react';

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
			justify={{ base: 'center', lg: 'initial' }}
			bgPos='right'
			bgSize='contain'
			bgRepeat='no-repeat'
			bgImage={{ base: 'none', lg: bgProducts }}
			color='white'
			pb='80px'
			pt='150px'
		>
			<Stack
				w={{ base: '100%', md: '95%', xl: '80%' }}
				justifyContent='center'
				align={{ base: 'center', lg: 'none' }}
				pl={{ base: '0', lg: '50px' }}
				gap='80px'
			>
				<Filters
					selectFilters={selectFilters}
					setSelectFilters={setSelectFilters}
				/>
				<Flex
					minH={{
						base: '80vh',
						md: '70vh'
					}}
					w='100%'
					justify='center'
				>
					{isLoading ? (
						<Spinner size='xl' alignSelf='center' />
					) : (
						<ProductsCardList products={products} />
					)}
				</Flex>
				<Box display={{ base: 'none', lg: 'block' }}>
					<ButtonOrange
						onClick={showMoreProducts}
						disabled={products().length < 10}
						p='18px 35px'
					>
						{showAllProducts
							? 'VER MENOS PRODUCTOS'
							: 'VER TODOS LOS PRODUCTOS'}
					</ButtonOrange>
				</Box>
			</Stack>
		</Flex>
	);
};

export default Home;
