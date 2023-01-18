import { Flex, Stack, Text, Box, StackDivider, Image } from '@chakra-ui/react';
import { currencyFormatter } from '~/services/utils/currencyFormatter';
import bgProduct from '/assets/img-product.png';

export const PaymentInformation = ({ selectOption, totalCost }) => {
	const price = currencyFormatter({ value: selectOption.price });
	const totalCostFormat = currencyFormatter({ value: totalCost });
	return (
		<Flex
			flexDir={{ base: 'column', lg: 'row' }}
			justify='space-between'
			gap={{ base: '40px', lg: '0' }}
			align='center'
			w='100%'
		>
			<Stack
				divider={<StackDivider />}
				w='65%'
				border='1px solid white'
				p={{ base: '10px', sm: '20px', lg: '25px' }}
			>
				<Text pl='20px'>Hunteando123@gmail.com</Text>
				<Box pl='20px'>
					<Text fontWeight='700'>{selectOption.textHeader}</Text>
					<Text>{price}</Text>
					<Text fontWeight='700'>Datos de cobranza</Text>
					<Text>Hunteando proyectos</Text>
					<Text>+5411234567</Text>
				</Box>
			</Stack>
			<Flex gap='30px' alignSelf='center'>
				<Box
					w='150px'
					border='.5rem solid rgba(243, 243, 243, 0.09)'
					h='max-content'
				>
					<Image w='100%' src={bgProduct} alt='vino' />
				</Box>
				<Stack>
					<Text>CREMA DE WISKHY</Text>
					<Text>{totalCostFormat}</Text>
				</Stack>
			</Flex>
		</Flex>
	);
};
