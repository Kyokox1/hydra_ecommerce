import { useState } from 'react';
import { Button, Text, Flex } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import {
	decrementProductCount,
	incrementProductCount
} from '~/features/products/productsCartSlice';

export const CounterCart = ({ initialCount, id, stock }) => {
	const [count, setCount] = useState(initialCount);
	const dispatch = useDispatch();
	console.log(stock);

	const handleIncreaseCount = () => {
		if (stock <= 0) return;
		setCount((prevCount) => prevCount + 1);
		dispatch(incrementProductCount({ id, count: 1 }));
	};

	const handleDecreaseCount = () => {
		if (count > 1) {
			setCount((prevCount) => prevCount - 1);
			dispatch(decrementProductCount({ id, count: 1 }));
		}
	};

	return (
		<Flex align='center' gap='1px'>
			<Button
				onClick={handleDecreaseCount}
				bgColor='#D9D9D9'
				color='black'
				fontWeight='700'
				borderRadius='0'
				size='xs'
			>
				-
			</Button>
			<Text
				textAlign='center'
				color='black'
				fontWeight='700'
				w='30px'
				p='2.4px 0'
				bgColor='#D9D9D9'
			>
				{count}
			</Text>
			<Button
				onClick={handleIncreaseCount}
				bgColor='#D9D9D9'
				color='black'
				fontWeight='700'
				borderRadius='0'
				size='xs'
			>
				+
			</Button>
		</Flex>
	);
};
