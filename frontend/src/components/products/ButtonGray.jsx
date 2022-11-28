import { Button } from '@chakra-ui/react';

export const ButtonGray = ({
	children,
	onClick,
	p = '10px 30px',
	disabled = false
}) => {
	return (
		<Button
			onClick={onClick}
			bgColor='#D9D9D9'
			color='black'
			fontWeight='200'
			p={p}
			disabled={disabled}
		>
			{children}
		</Button>
	);
};
