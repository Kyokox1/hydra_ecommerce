import { Button } from '@chakra-ui/react';

export const ButtonGray = ({
	children,
	onClick = null,
	p = '10px 30px',
	disabled = false,
	type = null,
	size = 'md',
	fontSize = '1rem',
	fontWeight = '200'
}) => {
	return (
		<Button
			onClick={onClick}
			type={type}
			bgColor='#D9D9D9'
			color='black'
			p={p}
			disabled={disabled}
			size={size}
			fontSize={fontSize}
			fontWeight={fontWeight}
		>
			{children}
		</Button>
	);
};
