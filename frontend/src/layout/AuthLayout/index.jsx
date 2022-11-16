import { Flex } from '@chakra-ui/react';
import bgSign from '/assets/fondoSign.png';

const AuthLayout = ({ children }) => {
	return (
		<Flex
			as='main'
			direction='column'
			justify='center'
			p='100px 0 10px 20%'
			minH='100vh'
			bgImage={bgSign}
			bgPos='right'
			bgRepeat='no-repeat'
			bgSize='contain'
			color='#F3F3F3'
		>
			<Flex direction='column' gap='30px' w='max-content' align='center'>
				{children}
			</Flex>
		</Flex>
	);
};

export default AuthLayout;
