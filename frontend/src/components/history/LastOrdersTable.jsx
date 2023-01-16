import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	TableContainer,
	Badge
} from '@chakra-ui/react';
import { TdResponsive } from './TdResponsive';

export const LastOrdersTable = ({ titles, body, handleClick }) => {
	return (
		<TableContainer overflow='auto' w={{ base: '95vw', md: 'auto' }}>
			<Table variant='unstyled'>
				<Thead
					display={{ base: 'none', md: 'table-header-group' }}
					fontSize='1rem'
					textAlign='center'
				>
					<Tr>
						{titles.map((data) => (
							<Th
								key={`thead-${data}`}
								fontSize='inherit'
								textAlign='inherit'
							>
								{data}
							</Th>
						))}
					</Tr>
				</Thead>
				<Tbody
					display={{ base: 'flex', md: 'table-header-group' }}
					gap='10px'
					w='100vw'
				>
					{body.map((data) => (
						<Tr
							display={{ base: 'block', md: 'table-row' }}
							background={{ base: '#c9c9c910', md: 'none' }}
							w={{ base: '900px', md: 'auto' }}
							minW={{ base: '300px', sm: '400px', md: 'auto' }}
							key={`tbody-${data.numOrder}`}
							onClick={() =>
								handleClick({
									numOrder: data.numOrder,
									dateSale: data.dateSale
								})
							}
							textAlign='center'
							cursor='pointer'
							_hover={{
								background: '#c9c9c910'
							}}
							borderRadius={{ base: '8px', md: 'none' }}
						>
							<TdResponsive
								borderRadius='8px 0 0 8px'
								titles={titles[0]}
							>
								{data.numOrder}
							</TdResponsive>
							<TdResponsive titles={titles[1]}>
								$ {data.subtotal}
							</TdResponsive>
							<TdResponsive titles={titles[2]}>
								$ {data.discount}
							</TdResponsive>
							<TdResponsive titles={titles[3]}>
								$ {data.shippingAmount}
							</TdResponsive>
							<TdResponsive titles={titles[4]}>
								$ {data.total}
							</TdResponsive>
							<TdResponsive
								titles={titles[5]}
								borderRadius='0 8px 8px 0'
							>
								<Badge colorScheme='green' variant='solid'>
									{data.state}
								</Badge>
							</TdResponsive>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
};
