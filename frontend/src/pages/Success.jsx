import { Flex, Heading } from '@chakra-ui/react';
import FooterSocialMedia from '~/components/layout/footer/FooterSocialMedia';

import bgSuccess from '/assets/bg-success.png';

const Success = () => {
	return (
		<Flex
			as='main'
			flexDir='column'
			justify='center'
			align='center'
			minH='100vh'
			bgImage={{ base: 'none', md: bgSuccess }}
			bgPos='right'
			bgRepeat='no-repeat'
			bgSize='contain'
			color='white'
			pb='80px'
			pt='150px'
			gap='50px'
			fontSize={{ base: '1.6rem', sm: '2rem' }}
		>
			<Heading as='h2' fontSize='inherit'>
				GRACIAS POR SU COMPRA
			</Heading>

			<FooterSocialMedia />
		</Flex>
	);
};

export default Success;
