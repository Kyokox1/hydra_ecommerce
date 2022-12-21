import {
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Box,
	Stack
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

export const ModalCart = ({ isOpen, onClose }) => {
	const { isUserLogged } = useUserAuth();
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
						justifyContent={!isUserLogged && 'center'}
					>
						{!isUserLogged ? (
							<Stack>
								<PopoverButton onClose={onClose} route='/login'>
									Iniciar Sesión
								</PopoverButton>
								<PopoverButton
									onClose={onClose}
									route='/signIn'
								>
									Registrarse
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
								<Box pl='10%'>
									<PostalCode />
								</Box>
								{/* section */}
								<ShippingOptions />
								{/* section */}

								<PresentCart />
							</>
						)}
					</DrawerBody>

					{isUserLogged && (
						<FooterCart totalCost={totalCost} onClose={onClose} />
					)}
				</DrawerContent>
			</Drawer>
		</>
	);
};
