import {
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Box,
	Stack,
	Text
} from '@chakra-ui/react';

// ? redux
import { useSelector } from 'react-redux';
import { productsInCart } from '~/features/products/productsCartSlice';

// ? components
import { FooterCart } from './FooterCart';
import { PostalCode } from './PostalCode';
import { ShippingOptions } from './ShippingOptions';
import { PresentCart } from './PresentCart';
import { CartSubTitle } from './CartSubTitle';
import { CartSubTotal } from './CartSubTotal';
import { CartProductList } from './CartProductList';
import { useShipping } from '~/hooks/useShipping';
import { useUserAuth } from '~/hooks/useUserAuth';
import { PopoverButton } from '../popover-auth-user/PopoverButton';
import { PATHS } from '~/constans/pathsRoutes';

import { BiLogIn } from 'react-icons/bi';
import { GoSignIn } from 'react-icons/go';

export const ModalCart = ({ isOpen, onClose }) => {
	const { isUserAuthenticated } = useUserAuth();
	const productsCart = useSelector(productsInCart);
	const { totalPriceProducts, totalCost } = useShipping();

	return (
		<>
			<Drawer
				isOpen={isOpen}
				size='sm'
				placement='right'
				onClose={onClose}
			>
				<DrawerOverlay />
				<DrawerContent backgroundColor='black' color='white' p='8px'>
					<DrawerCloseButton />
					<DrawerHeader as='header' fontSize='1.1rem'>
						CARRITO DE COMPRAS
					</DrawerHeader>

					<DrawerBody
						as='section'
						display='flex'
						flexDir='column'
						gap='30px'
						fontSize='.8rem'
						justifyContent={!isUserAuthenticated && 'center'}
					>
						{!isUserAuthenticated ? (
							<Stack>
								<PopoverButton
									onClick={onClose}
									route={PATHS.LOGIN}
								>
									<BiLogIn size='1.4rem' />
									<Text ml='8px'>Iniciar Sesión </Text>
								</PopoverButton>
								<PopoverButton
									onClick={onClose}
									route={PATHS.REGISTER}
								>
									<GoSignIn size='1.3rem' />
									<Text ml='8px'>Registrarse</Text>
								</PopoverButton>
							</Stack>
						) : (
							<>
								<CartSubTitle />
								{/* productList */}
								<CartProductList productsCart={productsCart} />
								{/* productList */}

								<CartSubTotal
									productsCart={productsCart}
									totalPriceProducts={totalPriceProducts}
								/>
								{productsCart.length ? (
									<>
										<Box pl='10%'>
											<PostalCode />
										</Box>
										{/* section */}
										<ShippingOptions />
										{/* section */}

										<PresentCart />
									</>
								) : null}
							</>
						)}
					</DrawerBody>

					{isUserAuthenticated && (
						<FooterCart
							totalCost={totalCost}
							productsCart={productsCart}
							onClose={onClose}
						/>
					)}
				</DrawerContent>
			</Drawer>
		</>
	);
};
