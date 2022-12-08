import {
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Flex,
	Box,
	Text
} from '@chakra-ui/react';

// ? redux
import { useSelector } from 'react-redux';
import { productsInCart } from '~/features/products/productsCartSlice';

// ? components
import { BorderContainer } from './BorderContainer';
import { CartProductItem } from './cartProductItem';
import { FooterCart } from './FooterCart';
import { PostalCode } from './PostalCode';
import { ShippingOptions } from './ShippingOptions';
import { PresentCart } from './PresentCart';

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
						<BorderContainer>
							<Text>PRODUCTO</Text>
							<Text>SUBTOTAL</Text>
						</BorderContainer>
						{/* productList */}
						<Flex py='10px' pl='10%' flexDir='column' gap='20px'>
							{productsCart.length ? (
								productsCart.map((product) => (
									<CartProductItem
										key={`cart-${product.id}`}
										{...product}
									/>
								))
							) : (
								<Text>SIN PRODUCTOS</Text>
							)}
						</Flex>
						{/* productList */}

						<BorderContainer>
							<Text>Sub Total (sin envio):</Text>
							<Text fontSize='1rem'>
								{productsCart.length ? `$${totalCost}` : '$000'}
							</Text>
						</BorderContainer>
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
