import {
	Flex,
	IconButton,
	Box,
	useDisclosure,
	Popover,
	PopoverTrigger
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

// ? redux
import { useDispatch } from 'react-redux';
import { logoutUser } from '~/features/user/userSlice';

// ? components
import { useUserAuth } from '~/hooks/useUserAuth';

// ? assets
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { ModalCart } from '~/components/layout/modal-cart/ModalCart';
import { PopoverAuthUser } from '../popover-auth-user/PopoverAuthUser';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavIconButton } from './NavIconButton';
import { HamburgerModal } from '../mobile-modal-nav/HamburgerModal';
import { CartCounterIndicator } from './CartCounterIndicator';

export const NavIcons = () => {
	const { jwt, isUserAuthenticated } = useUserAuth();
	const cart = useDisclosure();
	const hamburger = useDisclosure();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = (closePopover) => {
		dispatch(logoutUser({ jwt, navigate, closePopover }));
	};

	return (
		<Flex
			justify='center'
			align='center'
			pos='relative'
			gap={{ base: '10px', md: '0' }}
			fontSize='1.5rem'
		>
			<Popover placement='bottom-end'>
				{({ isOpen, onClose }) => (
					<>
						<PopoverTrigger>
							<IconButton
								fontSize='inherit'
								variant='ghost'
								color='white'
								colorScheme='whiteAlpha'
								isRound
								aria-label='profile-button'
								icon={<BsFillPersonFill />}
							/>
						</PopoverTrigger>
						<PopoverAuthUser
							handleLogout={() => handleLogout(onClose)}
							isUserAuthenticated={isUserAuthenticated}
							onClose={onClose}
						/>
					</>
				)}
			</Popover>

			<Box pos='relative'>
				<NavIconButton
					icon={<AiOutlineShoppingCart />}
					onClick={cart.onOpen}
					ariaLabel={'cart-button'}
				/>
				<ModalCart isOpen={cart.isOpen} onClose={cart.onClose} />
			</Box>

			<Box pos='relative' display={{ base: 'block', md: 'none' }}>
				<NavIconButton
					icon={<GiHamburgerMenu size='1.4rem' />}
					onClick={hamburger.onOpen}
					ariaLabel={'hamburger-button'}
				/>

				<HamburgerModal
					isOpen={hamburger.isOpen}
					onClose={hamburger.onClose}
				/>
			</Box>

			<CartCounterIndicator isUserAuthenticated={isUserAuthenticated} />
		</Flex>
	);
};
