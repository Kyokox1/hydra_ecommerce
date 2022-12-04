import { Flex } from '@chakra-ui/react';
import bgSign from '/assets/fondoSign.png';

const AuthLayout = ({ children }) => {
	return (
		<Flex
			as='main'
			direction='column'
			justify='center'
			align={{ base: 'center', lg: 'initial' }}
			p={{ base: '120px 0 0 0', lg: '120px 0 10px 20%' }}
			minH='100vh'
			bgImage={bgSign}
			bgPos={{ base: 'center', lg: 'right' }}
			bgRepeat='no-repeat'
			bgSize={{ base: 'cover', lg: 'contain' }}
			color='#F3F3F3'
		>
			<Flex
				as='section'
				direction='column'
				gap='30px'
				w='max-content'
				align='center'
			>
				{children}
			</Flex>
		</Flex>
	);
};

export default AuthLayout;
