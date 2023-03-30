import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { TableRow as MuiTableRow } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TableCell from '@mui/material/TableCell';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';

const TableRow = (props) => {
	const { row, headers, getDetailPanelContent } = props;
	const [open, setOpen] = useState(false);

	return (
		<>
			<MuiTableRow>
				{headers?.map((header, index) => (
					<TableCell key={`${header}#${index}`}>
						{header.component ? (
							<>{header.component(row[header.id])}</>
						) : (
							<Typography sx={{ size: '10px' }}>
								{row[header.id]}
							</Typography>
						)}
					</TableCell>
				))}
			</MuiTableRow>
			<MuiTableRow>
				<TableCell
					style={{
						paddingBottom: 0,
						paddingTop: 0,
						backgroundColor: 'lightgray',
					}}
					colSpan={headers?.length + 1}
				>
					<Collapse in={open} timeout='auto' unmountOnExit>
						{getDetailPanelContent &&
							row &&
							row.items &&
							row.items.length !== 0 && (
								<Box
									sx={{
										margin: '10px',
									}}
								>
									{getDetailPanelContent(row)}
								</Box>
							)}
					</Collapse>
				</TableCell>
			</MuiTableRow>
		</>
	);
};

export default TableRow;
