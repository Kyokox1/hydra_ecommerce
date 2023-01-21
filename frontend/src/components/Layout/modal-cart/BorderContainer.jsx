import { Flex } from '@chakra-ui/react';

export const BorderContainer = ({ children, p = '12px 12px 12px 0' }) => {
	return (
		<Flex
			as='section'
			justify='space-between'
			borderTop='1px solid white'
			borderBottom='1px solid white'
			p={p}
		>
			{children}
		</Flex>
	);
};
