import { Flex, Text } from '@chakra-ui/react';

const footerNav = [
	'Términos y Condiciones',
	'Política de Privacidad',
	'Contacto',
	'Ayuda'
];

export default function FooterMobileNav() {
	return (
		<Flex as='nav' justify='space-around' fontSize='.8rem' align='center'>
			{footerNav.map((element) => (
				<Text key={`footer ${element}`} w='min-content'>
					{element}
				</Text>
			))}
		</Flex>
	);
}
