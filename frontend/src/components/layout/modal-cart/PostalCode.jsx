import { Flex, Text, FormControl, Input } from '@chakra-ui/react';

import { ButtonGray } from '~/components/home/ButtonGray';

export const PostalCode = () => {
	return (
		<Flex as='section' flexDir='column' gap='10px'>
			<FormControl
				as='form'
				display='flex'
				gap='1px'
				color='black'
				borderRadius='10px'
			>
				<Input
					placeholder='Tu código postal'
					_placeholder={{ color: 'black' }}
					variant='unstyled'
					w='120px'
					fontSize='.8rem'
					bgColor='#d9d9d9'
					px='10px'
				/>
				<ButtonGray
					type='submit'
					size='sm'
					p='0 20px'
					fontSize='.7rem'
					fontWeight='500'
				>
					CALCULAR
				</ButtonGray>
			</FormControl>
			<Text fontSize='.9rem'>Envio gratis superando los $15,000</Text>
		</Flex>
	);
};
