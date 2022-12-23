import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	colors: {
		brand: {
			100: '#f7fafc',
			// ...
			900: '#1a202c'
		}
	},
	fonts: {
		heading: `'Titillium Web', sans-serif`,
		body: `'Titillium Web', sans-serif`
	},
	styles: {
		global: {
			a: {
				TextDecoder: 'none',
				_hover: { color: 'inherit' }
			},
			'@media (min-width: 992px)': {
				'::-webkit-scrollbar': {
					position: 'absolute',
					width: '6px',
					background: '#22252f'
				},

				'::-webkit-scrollbar-thumb': {
					background: '#8e99c7',
					borderRadius: '999px'
				},

				'::-webkit-scrollbar-thumb:hover': {
					background: '#adb5d6'
				}
			}
		}
	}
});
