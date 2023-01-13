import { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FormControl, Input, IconButton } from '@chakra-ui/react';

import { SearchContext } from '~/context/searchContext';

// ? assets
import { FiSearch } from 'react-icons/fi';

// ? redux
import { useDispatch } from 'react-redux';
import { searchProducts } from '~/features/products/getProductsSlice';
import { PATHS } from '~/constans/pathsRoutes';

export const NavSearch = ({ onClose = null }) => {
	const [search, setSearch] = useState('');
	const { setIsSearching } = useContext(SearchContext);

	const navigate = useNavigate();
	const { pathname } = useLocation();

	const dispatch = useDispatch();

	const handleSearch = (event) => {
		event.preventDefault();
		if (pathname !== PATHS.FLAVORS) navigate(PATHS.FLAVORS);

		dispatch(searchProducts({ search }));
		setIsSearching(true);
		setSearch('');
		onClose && onClose();
	};

	return (
		<FormControl
			as='form'
			onSubmit={handleSearch}
			display='flex'
			w={{ base: '200px', sm: '150px', md: '100px' }}
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
