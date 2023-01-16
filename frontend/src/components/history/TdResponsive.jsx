import { Td } from '@chakra-ui/react';

export const TdResponsive = ({ children, titles, borderRadius = 'none' }) => {
	return (
		<Td
			aria-label={titles}
			display={{ base: 'block', md: 'table-cell' }}
			borderRadius={borderRadius}
			textAlign={{ base: 'right', md: 'inherit' }}
			_before={{
				base: {
					content: 'attr(aria-label)',
					fontWeight: '700',
					float: 'left'
				},
				md: { display: 'none' }
			}}
		>
			{children}
		</Td>
	);
};
