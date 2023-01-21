import { Checkbox, Image } from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { changeIsPresent, presentCartState } from '~/features/cart/cartSlice';

import { BorderContainer } from './BorderContainer';
import handGift from '/assets/hand-gift.svg';

export const PresentCart = () => {
	const isPresent = useSelector(presentCartState);
	const dispatch = useDispatch();

	const onChangeIsPresent = (event) => {
		dispatch(changeIsPresent(event.target.checked));
	};

	return (
		<BorderContainer p='30px 12px 30px 0'>
			<Checkbox
				colorScheme='green'
				gap='10px'
				isChecked={isPresent}
				onChange={onChangeIsPresent}
			>
				¿Estás haciendo un regalo?
			</Checkbox>
			<Image src={handGift} alt='hand-gift' />
		</BorderContainer>
	);
};
