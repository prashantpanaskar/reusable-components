//Third party imports
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
//Local imports
import TableHead from './tableHead/TableHead';
import TableRow from './tableRow/TableRow';
import { filterArray, stableSort } from 'common/utility';

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

export default function DataGrid({
	headers,
	data,
	pagination,
	rowsPerPageOptions,
	getDetailPanelContent,
	filters,
}) {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [order, setOrder] = React.useState('desc');
	const [orderBy, setOrderBy] = React.useState(headers[0]?.id);
	const [filteredData, setFilteredData] = useState(data);

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	useEffect(() => {
		const filteredData = filterArray(data, filters);
		setFilteredData(filteredData);
	}, [filters]);

	return (
		<>
			<TableContainer component={Paper}>
				<Table aria-label='collapsible table'>
					<TableHead
						//numSelected={selected.length}
						headers={headers}
						order={order}
						orderBy={orderBy}
						//onSelectAllClick={handleSelectAllClick}
						onRequestSort={handleRequestSort}
						rowCount={data?.length}
					/>
					<TableBody>
						{stableSort(filteredData, getComparator(order, orderBy))
							.slice(
								page * rowsPerPage,
								page * rowsPerPage + rowsPerPage
							)
							.map((row, index) => (
								<TableRow
									key={`${row[0]}#${index}`}
									row={row}
									headers={headers}
									getDetailPanelContent={
										getDetailPanelContent
									}
								/>
							))}
					</TableBody>
				</Table>
			</TableContainer>
			{pagination && (
				<TablePagination
					rowsPerPageOptions={rowsPerPageOptions}
					component='div'
					count={filteredData?.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			)}
		</>
	);
}
