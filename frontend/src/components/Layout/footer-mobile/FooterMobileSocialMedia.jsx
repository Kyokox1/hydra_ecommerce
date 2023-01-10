import { Flex } from '@chakra-ui/react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

export const FooterMobileSocialMedia = () => {
	return (
		<Flex as='section' justify='center' gap='40px' align='center'>
			<FaFacebookF size='1.6rem' />
			<AiFillInstagram size='2rem' />
		</Flex>
	);
};
