import { Flex } from '@chakra-ui/react';

import { FooterMobileInformation } from '~/components/layout/footer-mobile/FooterMobileInformation';
import FooterMobileNav from '~/components/layout/footer-mobile/FooterMobileNav';
import { FooterMobileSocialMedia } from '~/components/layout/footer-mobile/FooterMobileSocialMedia';
import { FooterMobileSubscribe } from '~/components/layout/footer-mobile/FooterMobileSubscribe';

export const FooterMobile = () => {
	return (
		<Flex
			as='footer'
			display={{ base: 'flex', lg: 'none' }}
			flexDir='column'
			color='white'
			py='40px'
			gap='30px'
		>
			<FooterMobileInformation />

			<FooterMobileSubscribe />

			<FooterMobileSocialMedia />

			<FooterMobileNav />
		</Flex>
	);
};
