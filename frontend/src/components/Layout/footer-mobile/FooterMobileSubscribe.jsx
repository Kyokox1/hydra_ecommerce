import { Flex, FormControl, Text, Input, Button } from '@chakra-ui/react';
import { useSubscribe } from '~/hooks/useSubscribe';

export const FooterMobileSubscribe = () => {
	const handleSubmit = useSubscribe();

	return (
		<Flex
			as='section'
			align='center'
			justify='space-evenly'
			bgColor='gray'
			py='20px'
			px='10px'
		>
			<Flex flexDir='column' fontSize='.8rem'>
				<Text>SUSCRÍBETE!</Text>
				<Text>Recibe novedades y promociones</Text>
			</Flex>
			<FormControl
				as='form'
				onSubmit={handleSubmit}
				display='flex'
				w='max-content'
				h='min-content'
				bgColor='#ffffff'
				p='2px 2px'
				borderRadius='4px'
				color='black'
			>
				<Input
					name='email'
					w='150px'
					type='email'
					placeholder='ingrese su e-mail'
					_placeholder={{ color: 'black' }}
					variant='unstyled'
					bgColor='#ffffff'
					color='black'
					px='10px'
				/>
				<Button
					type='submit'
					variant='ghost'
					fontSize='.8rem'
					colorScheme='whiteAlpha'
					color='#ffffff'
					bgColor='gray'
				>
					ok
				</Button>
			</FormControl>
		</Flex>
	);
};
