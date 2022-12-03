import { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FormControl, Input, IconButton } from '@chakra-ui/react';

import { SearchContext } from '~/context/searchContext';

// ? assets
import { FiSearch } from 'react-icons/fi';

// ? redux
import { useDispatch } from 'react-redux';
import { searchProducts } from '~/features/products/getProductsSlice';

export const NavSearch = () => {
	const [search, setSearch] = useState('');
	const { setIsSearching } = useContext(SearchContext);

	const navigate = useNavigate();
	const { pathname } = useLocation();

	const dispatch = useDispatch();

	const handleSearch = (event) => {
		event.preventDefault();
		if (pathname !== '/productos') navigate('/productos');

		dispatch(searchProducts({ search }));
		setIsSearching(true);
		setSearch('');
	};

	return (
		<FormControl
			onSubmit={handleSearch}
			as='form'
			display='flex'
			w='100px'
			alignItems='center'
			borderBottom='white 1px solid'
		>
			<Input
				value={search}
				onChange={(event) => setSearch(event.target.value)}
				placeholder='Buscar'
				_placeholder={{ color: 'white' }}
				variant='unstyled'
				_focus={{ border: 'none' }}
			/>
			<IconButton
				color='gray'
				type='submit'
				icon={<FiSearch />}
				colorScheme='white'
				isRound
			/>
		</FormControl>
	);
};
