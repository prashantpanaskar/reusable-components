import React from 'react';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';

import { StyledTableHead } from './TableHead.Style';
import Typography from '@mui/material/Typography';

const TableHead = (props) => {
	const {
		//onSelectAllClick,
		order,
		orderBy,
		headers,
		//numSelected,
		//rowCount,
		onRequestSort,
	} = props;

	const createSortHandler = (property) => (event) => {
		onRequestSort(event, property);
	};

	return (
		<StyledTableHead>
			<TableRow>
				{/* <TableCell padding='checkbox'>
					<Checkbox
						color='primary'
						indeterminate={
							numSelected > 0 && numSelected < rowCount
						}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{
							'aria-label': 'select all desserts',
						}}
					/>
				</TableCell> */}
				{headers.map((header,index) => (
					<TableCell
						key={`${header.id}#${index}`}
						align={header?.numeric ? 'right' : 'left'}
						padding={header?.disablePadding ? 'none' : 'normal'}
						sortDirection={orderBy === header.id ? order : false}
					>
						{header.sorting ? (
							<TableSortLabel
								hideSortIcon={false}
								active={orderBy === header.id}
								direction={
									orderBy === header.id ? order : 'asc'
								}
								onClick={createSortHandler(header.id)}
							>
								<Typography sx={{ color: 'black' }}>
									{header.headerName}
								</Typography>
								{orderBy === header.id ? (
									<Box component='span' sx={visuallyHidden}>
										{order === 'desc'
											? 'sorted descending'
											: 'sorted ascending'}
									</Box>
								) : null}
							</TableSortLabel>
						) : (
							<Typography sx={{ color: 'black' }}>
								{header.headerName}
							</Typography>
						)}
					</TableCell>
				))}
				<TableCell />
			</TableRow>
		</StyledTableHead>
	);
};

export default TableHead;
