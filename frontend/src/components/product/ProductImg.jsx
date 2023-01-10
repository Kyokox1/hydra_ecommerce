import { Box, Image } from '@chakra-ui/react';
import productImg from '/assets/img-product.png';

export const ProductImg = ({ display }) => {
	return (
		<Box
			display={display}
			maxW={{ base: '180px', sm: '220px', md: '300px' }}
			// maxW='50%'
			border={{
				base: 'none',
				md: '1.5rem solid rgba(243, 243, 243, 0.09);'
			}}
		>
			<Image src={productImg} alt={name} />
		</Box>
	);
};
