import { FormControl, Text, Select } from '@chakra-ui/react';

// ? Diccionario para filtrar productos
const FILTERS = {
	CHOCOLATE: '1',
	MIEL: '2',
	LICOR: '3'
};

export const Filters = ({ selectFilters, setSelectFilters }) => {
	return (
		<FormControl
			as='form'
			w='max-content'
			display='flex'
			alignItems='center'
			justifyContent='center'
		>
			<Text
				pr='10px'
				w='170px'
				textAlign='end'
				borderRight='1px solid gray'
			>
				Ordernar Por
			</Text>
			<Select
				value={selectFilters}
				onChange={(event) => setSelectFilters(event.target.value)}
				color='gray'
				placeholder='Seleccione'
				bgColor='transparent'
				variant='flushed'
				pl='10px'
				cursor='pointer'
			>
				<option value={FILTERS.CHOCOLATE}>Chocolate</option>
				<option value={FILTERS.MIEL}>Miel</option>
				<option value={FILTERS.LICOR}>Licor</option>
			</Select>
		</FormControl>
	);
};
