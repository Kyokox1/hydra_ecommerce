import { Checkbox, Image } from '@chakra-ui/react';

import { BorderContainer } from './BorderContainer';
import handGift from '/assets/hand-gift.svg';

export const PresentCart = () => {
	return (
		<BorderContainer p='30px 12px 30px 0'>
			<Checkbox colorScheme='green' gap='10px'>
				¿Estás haciendo un regalo?
			</Checkbox>
			<Image src={handGift} alt='hand-gift' />
		</BorderContainer>
	);
};
