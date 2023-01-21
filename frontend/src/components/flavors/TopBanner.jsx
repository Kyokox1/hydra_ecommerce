import { Box, Image } from '@chakra-ui/react';
import bannerTop from '/assets/banner-top-flavors.png';

export const TopBanner = () => {
	return (
		<Box as='section' w='100%'>
			<Image src={bannerTop} alt='banner' w='100%' />
		</Box>
	);
};
