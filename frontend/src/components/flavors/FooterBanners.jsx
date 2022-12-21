import { Flex, Box, Image } from '@chakra-ui/react';
import bannerBottomLeft from '/assets/banner-bottom-flavors-l.png';
import bannerBottomRight from '/assets/banner-bottom-flavors-r.png';

export const FooterBanners = () => {
	return (
		<Flex w='100%' justify='center' p='60px 0 120px 0'>
			<Box>
				<Image src={bannerBottomLeft} alt='banner-bottom-left' />
			</Box>
			<Box>
				<Image src={bannerBottomRight} alt='banner-bottom-right' />
			</Box>
		</Flex>
	);
};
