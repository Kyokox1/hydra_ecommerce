import { RadioGroup, Flex, Radio, Text, Box } from '@chakra-ui/react';
import { optionsShipping } from '~/constans/optionsShipping';
import { currencyFormatter } from '~/services/prices/currencyFormatter';

import { useDispatch, useSelector } from 'react-redux';
import {
	changeShippingOption,
	shippingCartState
} from '~/features/cart/cartSlice';

export const ShippingOptions = () => {
	const shippingOption = useSelector(shippingCartState);
	const dispatch = useDispatch();

	const onChangeShippingOption = (event) => {
		dispatch(changeShippingOption(event.target.value));
	};

	return (
		<RadioGroup
			as='section'
			display='flex'
			flexDir='column'
			gap='10px'
			defaultValue={shippingOption}
		>
			{optionsShipping.map((option) => (
				<Flex key={option.header} flexDir='column'>
					<Text>{option.header}</Text>
					<Flex
						border='1px white solid'
						align='initial'
						p='10px'
						justifyContent='space-between'
					>
						<Flex gap='8px'>
							<Radio
								h='max-content'
								value={option.value}
								isChecked={shippingOption === option.value}
								onChange={onChangeShippingOption}
								colorScheme='green'
							/>
							<Box>
								<Text>{option.textHeader}</Text>
								<Text>{option.textBody}</Text>
							</Box>
						</Flex>
						<Text>
							{currencyFormatter({ value: option.price })}
						</Text>
					</Flex>
				</Flex>
			))}
		</RadioGroup>
	);
};
