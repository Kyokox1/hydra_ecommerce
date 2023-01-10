import { FormControl, Text, Select } from '@chakra-ui/react';

// ? Diccionario para filtrar productos
import { FILTERS } from '~/constans';

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
				{FILTERS.map(({ name, value }) => (
					<option key={`${name}-select`} value={value}>
						{name}
					</option>
				))}
			</Select>
		</FormControl>
	);
};
