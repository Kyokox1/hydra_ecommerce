import { Flex, Icon, Text, Stack } from '@chakra-ui/react';
import { BsFillTelephoneFill } from 'react-icons/bs';

const FooterAuth = () => {
	return (
		<Flex align='center' gap='10px' pt='10px' pos='relative'>
			<Icon
				as={BsFillTelephoneFill}
				fontSize='1.8rem'
				pos='absolute'
				left='-40px'
			/>
			<Stack>
				<Text fontWeight='300'>CONTACTANOS</Text>
				<Text fontWeight='900'>0800-1234567</Text>
			</Stack>
		</Flex>
	);
};

export default FooterAuth;
