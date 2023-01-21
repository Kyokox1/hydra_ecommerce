import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

export const StarsRating = ({ fillStar, setFillStar }) => {
	const [hoverValue, setHoverValue] = useState(undefined);
	const handleClickStar = (index) => {
		setFillStar(index);
	};

	const handleOverStar = (index) => {
		setHoverValue(index);
	};

	const handleLeaveStart = () => {
		setHoverValue(undefined);
	};
	return (
		<Flex alignSelf='center' gap='2px'>
			{new Array(5).fill('').map((_, index) => (
				<AiFillStar
					onClick={() => handleClickStar(index + 1)}
					onMouseOver={() => handleOverStar(index + 1)}
					onMouseLeave={handleLeaveStart}
					key={`star-${index}`}
					color={
						(hoverValue || fillStar) >= index + 1 ? 'gold' : 'gray'
					}
					size='1.3rem'
					cursor='pointer'
				/>
			))}
		</Flex>
	);
};
