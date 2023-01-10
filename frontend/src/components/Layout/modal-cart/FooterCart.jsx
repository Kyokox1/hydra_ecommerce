import { DrawerFooter, Flex, Text, Link as LinkChakra } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { ButtonOrange } from '~/components/home/ButtonOrange';
import { PATHS } from '~/constans/pathsRoutes';

export const FooterCart = ({ totalCost, onClose, productsCart }) => {
	return (
		<DrawerFooter display='flex' flexDir='column' gap='20px' as='footer'>
			<Flex w='100%' justify='space-between'>
				<Text>Total :</Text>
				<Text pr='10%'>
					{!productsCart.length ? '$000' : `$${totalCost}`}
				</Text>
			</Flex>
			<Flex w='100%' justify='space-between' align='center'>
				<LinkChakra
					as={Link}
					to='/'
					onClick={onClose}
					textDecor='underline'
				>
					Ver más productos
				</LinkChakra>
				<Link to={PATHS.CHECKOUT}>
					<ButtonOrange
						onClick={onClose}
						disabled={!productsCart.length}
						color='black'
						p='15px 25px'
					>
						Iniciar Compra
					</ButtonOrange>
				</Link>
			</Flex>
		</DrawerFooter>
	);
};
