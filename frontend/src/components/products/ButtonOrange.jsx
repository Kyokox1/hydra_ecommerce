import { Button } from '@chakra-ui/react';

export const ButtonOrange = ({
	children,
	onClick = null,
	disabled = false,
	p = '12px 25px'
}) => {
	return (
		<Button
			onClick={onClick}
			disabled={disabled}
			h='max-content'
			p={p}
			fontSize='0.875rem'
			fontWeight='600'
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
