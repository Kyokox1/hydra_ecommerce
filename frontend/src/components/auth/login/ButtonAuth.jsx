import { Button } from '@chakra-ui/react';

export const ButtonAuth = ({ children, px = '100px' }) => {
	return (
		<Button
			type='submit'
			px={px}
			fontWeight='700'
			bgColor='#E68C11'
			border='1px solid #D7B781'
			lineHeight='0'
			boxShadow='0px 4px 4px rgba(255, 255, 255, 0.25)'
			_hover={{ bgColor: '#E56C10' }}
		>
			{children}
		</Button>
	);
};
