import {
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Box
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

export const ModalCart = ({ isOpen, onClose }) => {
	const productsCart = useSelector(productsInCart);

	const totalCost = productsCart
		.map((product) => product.cost * product.count)
		.reduce((acc, curr) => acc + curr, 0);
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
					>
						<CartSubTitle />
						{/* productList */}
						<CartProductList productsCart={productsCart} />
						{/* productList */}

						<CartSubTotal
							productsCart={productsCart}
							totalCost={totalCost}
						/>
						<Box pl='10%'>
							<PostalCode />
						</Box>
						{/* section */}
						<ShippingOptions />
						{/* section */}

						<PresentCart />
					</DrawerBody>

					<FooterCart totalCost={totalCost} onClose={onClose} />
				</DrawerContent>
			</Drawer>
		</>
	);
};
