import { RadioGroup, Flex, Radio, Text, Box } from '@chakra-ui/react';

const optionsShipping = [
	{
		header: 'Envio a domicilio',
		textHeader: 'Andreani Estandar',
		textBody: 'Llega entre el martes #### y el miercoles ####',
		price: '$1300',
		value: '1'
	},
	{
		header: 'Retirar por punto',
		textHeader: 'Punto de Retiro',
		textBody: 'Llega entre el martes #### y el miercoles ####',
		price: '$1000',
		value: '2'
	}
];

export const ShippingOptions = () => {
	return (
		<RadioGroup
			as='section'
			defaultValue={optionsShipping[0].value}
			display='flex'
			flexDir='column'
			gap='10px'
		>
			{optionsShipping.map((option) => (
				<Flex key={option.header} flexDir='column'>
					<Text>{option.header}</Text>
					<Flex
						border='1px white solid'
						align='initial'
						p='10px'
						justifyContent='space-between'
					>
						<Flex gap='8px'>
							<Radio
								h='max-content'
								value={option.value}
								colorScheme='green'
							/>
							<Box>
								<Text>{option.textHeader}</Text>
								<Text>{option.textBody}</Text>
							</Box>
						</Flex>
						<Text>{option.price}</Text>
					</Flex>
				</Flex>
			))}
		</RadioGroup>
	);
};
