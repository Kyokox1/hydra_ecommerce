import { Heading } from '@chakra-ui/react';
const Title = ({ children, fontSize = '4rem' }) => {
	return (
		<Heading as='h2' fontWeight='400' fontSize={fontSize} color='white'>
			{children}
		</Heading>
	);
};

export default Title;
