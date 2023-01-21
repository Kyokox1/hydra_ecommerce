import { Flex, Button, Text } from '@chakra-ui/react';

export const ProductCounter = ({ count, setCount, stockCart }) => {
	const handleCounter = (text) => {
		if (text === 'res' && count > 0) setCount((prevCount) => prevCount - 1);
		if (text === 'sum' && count < stockCart)
			setCount((prevCount) => prevCount + 1);
	};
	return (
		<Flex align='center' gap={{ base: '8px', md: '15px' }}>
			<Button
				onClick={() => handleCounter('res')}
				bgColor='#D9D9D9'
				color='black'
				fontWeight='700'
				borderRadius='50%'
				size={{ base: 'xs', sm: 'sm' }}
			>
				-
			</Button>
			<Text textAlign='center' w='20px'>
				{count}
			</Text>
			<Button
				onClick={() => handleCounter('sum')}
				bgColor='#D9D9D9'
				color='black'
				fontWeight='700'
				borderRadius='50%'
				size={{ base: 'xs', sm: 'sm' }}
			>
				+
			</Button>
		</Flex>
	);
};
