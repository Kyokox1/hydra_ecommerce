import { useState } from 'react';
import { Flex, Stack, Text, Textarea, useToast } from '@chakra-ui/react';
import { ButtonOrange } from '~/components/home/ButtonOrange';
import { StarsRating } from './StarsRating';

const initialValueStar = 1;

export const ComentaryForm = ({ onClose }) => {
	const [fillStar, setFillStar] = useState(initialValueStar);
	const toast = useToast();

	const handleSubmit = (event) => {
		event.preventDefault();
		event.target.commentary.value = '';
		setFillStar(initialValueStar);
		onClose();
		toast({
			description: 'Calificación Enviada.',
			status: 'success'
		});
	};

	return (
		<Flex
			as='form'
			onSubmit={handleSubmit}
			flexDir={{ base: 'column', md: 'row' }}
			gap={{ base: '20px', md: '0' }}
			fontSize='.9rem'
			justify='space-evenly'
			textAlign='center'
		>
			<Stack>
				<Text>Que puntuación le otorgas a tu compra</Text>
				<StarsRating fillStar={fillStar} setFillStar={setFillStar} />
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
