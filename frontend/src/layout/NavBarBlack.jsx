import {
	Flex,
	FormControl,
	IconButton,
	Image,
	Input,
	Stack
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

//  redux
import { useDispatch, useSelector } from 'react-redux';
import { currentToken, logoutUser } from '../features/user/userSlice';

// assets
import whiteLogo from '../assets/logo-white.png';
import { FiSearch } from 'react-icons/fi';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';

// components
import { NavLinkChakra } from '../components/Layout/NavLinkChakra';

export const NavBarBlack = () => {
	const jwt = useSelector(currentToken);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(logoutUser({ jwt, navigate }));
	};

	return (
		<Flex
			as='header'
			justify='space-around'
			pos='absolute'
			top='0'
			w='100%'
			color='white'
		>
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
				<Stack direction='row' gap='15px'>
					<NavLinkChakra to='/'>INICIO</NavLinkChakra>
					<NavLinkChakra to='productos'>PRODUCTOS</NavLinkChakra>
					<NavLinkChakra to='promociones'>PROMOCIONES</NavLinkChakra>
					<NavLinkChakra to='comprar'>COMO COMPRO</NavLinkChakra>
					<NavLinkChakra to='contacto'>CONTACTO</NavLinkChakra>
				</Stack>
				<FormControl
					as='form'
					display='flex'
					w='100px'
					alignItems='center'
					borderBottom='white 1px solid'
				>
					<Input
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
				<Flex justify='center' align='center' fontSize='1.5rem'>
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
				</Flex>
			</Stack>
		</Flex>
	);
};
