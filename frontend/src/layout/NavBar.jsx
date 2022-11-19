import { useState } from 'react';
import {
	Flex,
	FormControl,
	IconButton,
	Image,
	Input,
	Stack,
	Text
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

//  redux
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '~/features/user/userSlice';
import { searchProducts } from '~/features/products/getProductsSlice';

// assets
import whiteLogo from '/assets/logo-white.png';
import navBarBg from '/assets/navBar.png';
import { FiSearch } from 'react-icons/fi';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';

// components
import { productsInCart } from '~/features/products/productsCartSlice';
import { NavList } from '~/components/Layout/NavList';
import { useUserAuth } from '~/hooks/useUserAuth';

export const NavBar = () => {
	const { jwt, isUserLogged } = useUserAuth();
	const productsCart = useSelector(productsInCart);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [search, setSearch] = useState('');

	const handleLogout = () => {
		dispatch(logoutUser({ jwt, navigate }));
	};

	const handleSearch = (event) => {
		event.preventDefault();
		dispatch(searchProducts({ search }));
	};

	return (
		<Flex
			as='header'
			pos='fixed'
			top='0'
			w='100%'
			color='white'
			zIndex='900'
			fontFamily='Roboto, sans-serif'
		>
			<Flex pos='relative' justify='space-around' w='inherit'>
				<Image
					pos='absolute'
					src={navBarBg}
					left='0'
					bottom='0'
					w='100%'
					opacity='0.9'
					zIndex='-1'
				/>
				<Link to='/productos'>
					<Image src={whiteLogo} alt='logo' />
				</Link>
				<Stack
					as='nav'
					direction='row'
					w='70%'
					justifyContent='space-evenly'
					alignItems='center'
				>
					<NavList gap='20px' mayus={true} />
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
					<Flex
						justify='center'
						align='center'
						pos='relative'
						fontSize='1.5rem'
					>
						<IconButton
							fontSize='inherit'
							onClick={handleLogout}
							variant='ghost'
							color='white'
							colorScheme='whiteAlpha'
							isRound
							icon={<BsFillPersonFill />}
						/>
						<IconButton
							fontSize='inherit'
							variant='ghost'
							color='white'
							colorScheme='whiteAlpha'
							isRound
							icon={<AiOutlineShoppingCart />}
						/>
						{Boolean(productsCart.length) && isUserLogged ? (
							<Text
								as='span'
								display='flex'
								justifyContent='center'
								alignItems='center'
								pos='absolute'
								top='2px'
								right='5px'
								h='15px'
								w='15px'
								fontSize='.8rem'
								bgColor='red'
								borderRadius='50%'
							>
								{productsCart.length}
							</Text>
						) : null}
					</Flex>
				</Stack>
			</Flex>
		</Flex>
	);
};
