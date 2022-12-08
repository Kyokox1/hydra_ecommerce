import { Flex, IconButton, Text, Box, useDisclosure } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

// ? redux
import { useDispatch, useSelector } from 'react-redux';
import { productsInCart } from '~/features/products/productsCartSlice';
import { logoutUser } from '~/features/user/userSlice';

// ? components
import { useUserAuth } from '~/hooks/useUserAuth';

// ? assets
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { ModalCart } from '~/components/Layout/modal-cart/ModalCart';

export const NavIcons = () => {
	const { jwt, isUserLogged } = useUserAuth();
	const productsCart = useSelector(productsInCart);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isOpen, onClose, onOpen } = useDisclosure();

	const handleLogout = () => {
		dispatch(logoutUser({ jwt, navigate }));
	};
	return (
		<Flex justify='center' align='center' pos='relative' fontSize='1.5rem'>
			<IconButton
				fontSize='inherit'
				onClick={handleLogout}
				variant='ghost'
				color='white'
				colorScheme='whiteAlpha'
				isRound
				icon={<BsFillPersonFill />}
			/>
			<Box pos='relative'>
				<IconButton
					onClick={onOpen}
					fontSize='inherit'
					variant='ghost'
					color='white'
					colorScheme='whiteAlpha'
					isRound
					icon={<AiOutlineShoppingCart />}
				/>
				<ModalCart isOpen={isOpen} onClose={onClose} />
			</Box>
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
	);
};
