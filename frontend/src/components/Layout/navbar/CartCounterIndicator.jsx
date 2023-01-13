import { Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { productsInCart } from '~/features/products/productsCartSlice';

export const CartCounterIndicator = ({ isUserAuthenticated }) => {
	const productsCart = useSelector(productsInCart);

	return Boolean(productsCart.length) && isUserAuthenticated ? (
		<Text
			as='span'
			display='flex'
			justifyContent='center'
			alignItems='center'
			pos='absolute'
			top='2px'
			right={{ base: '50px', md: '2px' }}
			h='15px'
			w='15px'
			fontSize='.8rem'
			bgColor='red'
			borderRadius='50%'
		>
			{productsCart.length}
		</Text>
	) : null;
};
