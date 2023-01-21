import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer
} from '@chakra-ui/react';

export const MyAccountTable = ({ dataArray }) => {
	return (
		<TableContainer overflow='auto' w={{ base: '95vw', md: 'auto' }}>
			<Table variant='unstyled'>
				<Thead fontSize='2rem' textAlign='center'>
					<Tr>
						{dataArray.map(({ title, content }) => (
							<Th
								key={`thead-${title}-${content}`}
								fontSize='inherit'
								textAlign='inherit'
							>
								{title}
							</Th>
						))}
					</Tr>
				</Thead>
				<Tbody>
					<Tr textAlign='center'>
						{dataArray.map(({ content }, i) => (
							<Td
								key={`tbody-${content}-${i}`}
								textAlign='inherit'
							>
								{content}
							</Td>
						))}
					</Tr>
				</Tbody>
			</Table>
		</TableContainer>
	);
};
