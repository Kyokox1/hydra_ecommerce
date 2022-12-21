import {
	Stack,
	Flex,
	Text,
	CheckboxGroup,
	Checkbox,
	StackDivider
} from '@chakra-ui/react';
import { FILTERS, VOLUME } from '~/constans';

export const AsideFilters = ({ selectedCategories, setSelectedCategories }) => {
	const handleCheckboxChange = (event) => {
		const category = Number(event.target.value);
		if (selectedCategories.includes(category)) {
			setSelectedCategories(
				selectedCategories.filter((c) => c !== category)
			);
		} else {
			setSelectedCategories([...selectedCategories, category]);
		}
	};

	return (
		<Stack as='aside' w='20%' gap='80px' alignItems='center'>
			<Text as='header'>
				Incio
				<Text as='span' fontWeight='700'>
					/Productos
				</Text>
			</Text>
			{/* filters */}
			<Stack divider={<StackDivider />} maxW='200px' gap='40px'>
				<Flex flexDir='column' gap='20px' alignItems='center'>
					<Flex flexDir='column' gap='20px'>
						<Text fontWeight='700'>Filtros</Text>
						<Text>Sabores</Text>
					</Flex>
					{/* checkboxs */}
					<CheckboxGroup colorScheme='green'>
						<Stack spacing={5}>
							{FILTERS.map(({ name, value }) => (
								<Checkbox
									key={name}
									value={value}
									isChecked={() =>
										selectedCategories.includes(value)
									}
									onChange={handleCheckboxChange}
									borderRadius='2px'
								>
									Crema de Whisky sabor a {name}
								</Checkbox>
							))}
						</Stack>
					</CheckboxGroup>
					{/* checkboxs */}
				</Flex>
				<Flex flexDir='column' gap='20px'>
					<Text textAlign='center'>Volumen</Text>
					{/* checkboxs */}
					<CheckboxGroup colorScheme='green'>
						<Stack spacing={5}>
							{VOLUME.map(({ name, value }) => (
								<Checkbox
									key={name}
									value={value}
									borderRadius='2px'
								>
									{name}
								</Checkbox>
							))}
						</Stack>
					</CheckboxGroup>
					{/* checkboxs */}
				</Flex>
			</Stack>
			{/* filters */}
		</Stack>
	);
};
