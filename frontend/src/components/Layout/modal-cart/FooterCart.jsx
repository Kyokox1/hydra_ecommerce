import { DrawerFooter, Flex, Text, Link as LinkChakra } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { ButtonOrange } from '~/components/products/ButtonOrange';

export const FooterCart = ({ totalCost, onClose }) => {
	return (
		<DrawerFooter display='flex' flexDir='column' gap='20px' as='footer'>
			<Flex w='100%' justify='space-between'>
				<Text>Total :</Text>
				<Text pr='10%'>${totalCost}</Text>
			</Flex>
			<Flex w='100%' justify='space-between' align='center'>
				<LinkChakra
					as={Link}
					to='/'
					onClick={onClose}
					textDecor='underline'
				>
					Ver mas productos
				</LinkChakra>
				<ButtonOrange color='black' p='15px 25px' onClick={onClose}>
					Iniciar Compra
				</ButtonOrange>
			</Flex>
		</DrawerFooter>
	);
};
