import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button
} from '@chakra-ui/react';

export const ModalCart = ({ isOpen, onClose }) => {
	return (
		<>
			<Drawer isOpen={isOpen} placement='right' onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent backgroundColor='black' color='white'>
					<DrawerCloseButton />
					<DrawerHeader fontSize='1.1rem'>
						CARRITO DE COMPRAS
					</DrawerHeader>

					<DrawerBody>asd</DrawerBody>

					<DrawerFooter>
						<Button variant='outline' mr={3} onClick={onClose}>
							Cancel
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
};
