import { useParams } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';

export const Product = () => {
	const { id } = useParams();
	return (
		<Flex pt='120px' color='white'>
			Product {id}
		</Flex>
	);
};
