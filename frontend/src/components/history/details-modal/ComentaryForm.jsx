import { Flex, Stack, Text, Textarea } from '@chakra-ui/react';
import { ButtonOrange } from '~/components/home/ButtonOrange';

export const ComentaryForm = () => {
	return (
		<Flex
			as='form'
			flexDir={{ base: 'column', md: 'row' }}
			gap={{ base: '20px', md: '0' }}
			fontSize='.9rem'
			justify='space-evenly'
			textAlign='center'
		>
			<Stack>
				<Text>Que puntuación le otorgas a tu compra</Text>
			</Stack>
			<Stack>
				<Text as='label' htmlFor='commentary'>
					Escribe un comentario
				</Text>
				<Textarea
					id='commentary'
					background='#FFFFFF26'
					fontSize='.9rem'
					maxH='80px'
				/>
			</Stack>
			<Flex alignSelf='center'>
				<ButtonOrange
					p={{
						base: '18px 120px',
						md: '12px 25px'
					}}
					color='black'
				>
					Enviar
				</ButtonOrange>
			</Flex>
		</Flex>
	);
};
