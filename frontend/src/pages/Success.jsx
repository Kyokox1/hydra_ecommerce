import { Flex, Heading } from '@chakra-ui/react';
import FooterSocialMedia from '~/components/Layout/footer/FooterSocialMedia';

import bgSuccess from '/assets/bg-success.png';

const Success = () => {
	return (
		<Flex
			as='main'
			flexDir='column'
			justify='center'
			align='center'
			minH='100vh'
			bgPos='right'
			bgSize='contain'
			bgRepeat='no-repeat'
			bgImage={bgSuccess}
			color='white'
			pb='80px'
			pt='150px'
			gap='50px'
		>
			<Heading as='h2'>GRACIAS POR SU COMPRA</Heading>

			<FooterSocialMedia />
		</Flex>
	);
};

export default Success;
