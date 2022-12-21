import { Text, Flex, Box } from '@chakra-ui/react';

import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

export default function FooterSocialMedia() {
	return (
		<Box fontSize='1.2rem'>
			<Text>REDES SOCIALES</Text>
			<Flex color='gray' gap='10px' alignItems='center' justify='center'>
				<FaFacebookF size='1.6rem' />
				<AiFillInstagram size='2rem' />
			</Flex>
		</Box>
	);
}
