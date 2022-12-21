import { Flex, Box, FormControl, Input, Text } from '@chakra-ui/react';
import { useSubscribe } from '~/hooks/useSubscribe';

export const FooterSubscribe = () => {
	const handleSubmit = useSubscribe();

	return (
		<Flex align='center' fontSize='.8rem' gap='20px'>
			<Box textAlign='initial'>
				<Text>SUSCRÍBETE!</Text>
				<Text w='max-content' color='gray'>
					Recibe novedades y promociones
				</Text>
			</Box>
			<FormControl as='form' onSubmit={handleSubmit}>
				<Input
					name='email'
					w='180px'
					h='25px'
					fontSize='.8rem'
					type='email'
					placeholder='Ingrese su e-mail'
					color='black'
					_placeholder={{
						color: 'black',
						fontsize: '.7rem'
					}}
					bgColor='#ffffff'
				/>
			</FormControl>
		</Flex>
	);
};
