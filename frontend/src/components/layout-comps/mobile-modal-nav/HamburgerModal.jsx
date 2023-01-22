import {
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Box
} from '@chakra-ui/react';

// ? components
import { NavList } from '../navbar/NavList';
import { IoIosBeer } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';
import { AiFillFire } from 'react-icons/ai';
import { NavSearch } from '../navbar/NavSearch';

const navIcons = [
	<FaHome key='icon-0' size='2rem' />,
	<IoIosBeer key='icon-1' size='2rem' />,
	<AiFillFire key='icon-2' size='2rem' />
];

export const HamburgerModal = ({ isOpen, onClose }) => {
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
					<DrawerHeader as='header' fontSize='1.4rem'>
						NAVEGACIÓN
					</DrawerHeader>

					<DrawerBody
						as='section'
						display='flex'
						flexDir='column'
						fontSize='1.5rem'
					>
						<Box alignSelf='center'>
							<NavSearch onClose={onClose} />
						</Box>
						<NavList
							direction='column'
							mayus={true}
							icon={navIcons}
							onClick={onClose}
						/>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};
