import { useState } from 'react';
import { Flex, Spinner, Stack } from '@chakra-ui/react';

import { useFilters } from '~/hooks/useFilters';
import { useProducts } from '~/hooks/useProducts';
import { AsideFilters } from '~/components/flavors/AsideFilters';
import { Filters } from '~/components/home/Filters';
import { ProductsCardList } from '~/components/home/ProductsCardList';
import { FooterBanners } from '~/components/flavors/FooterBanners';

const Promotions = () => {
	const { selectFilters, setSelectFilters } = useFilters();
	const { products, isLoading } = useProducts({
		selectFilters,
		productsInView: 5
	});

	// ? filters aside
	const [selectedCategories, setSelectedCategories] = useState([]);

	const filteredProducts = () => {
		if (!selectedCategories.length) return products().slice(0, 5);

		return products().filter((product) =>
			selectedCategories.includes(product.category_id)
		);
	};

	return (
		<Flex
			as='main'
			flexDir='column'
			pt='150px'
			color='white'
			minH='100vh'
			justify='center'
			align='center'
			gap='50px'
		>
			<Flex w='100%'>
				{/* AsideFilters */}
				<AsideFilters
					selectedCategories={selectedCategories}
					setSelectedCategories={setSelectedCategories}
				/>
				{/* AsideFilters */}
				<Stack
					flex='1'
					m='0 auto'
					alignItems='center'
					justifyContent='center'
					gap='80px'
					w='100%'
				>
					<Filters
						selectFilters={selectFilters}
						setSelectFilters={setSelectFilters}
					/>
					<Flex w='100%' justify='center'>
						{isLoading ? (
							<Spinner size='xl' alignSelf='center' />
						) : (
							<ProductsCardList products={filteredProducts} />
						)}
					</Flex>
					{/* footer */}
					<FooterBanners />
					{/* footer */}
				</Stack>
			</Flex>
		</Flex>
	);
};

export default Promotions;
