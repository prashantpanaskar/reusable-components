//Third party imports
import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { StyledPaper } from './Search.Style';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, Box, TextField } from '@mui/material';

const countries = [
	{ code: 'AD', label: 'Andorra', phone: '376' },
	{
		code: 'AE',
		label: 'United Arab Emirates',
		phone: '971',
	},
	{ code: 'AF', label: 'Afghanistan', phone: '93' },
	{
		code: 'AG',
		label: 'Antigua and Barbuda',
		phone: '1-268',
	},
];

const Search = (props) => {
	const [searchText, setSearchText] = useState('');
	const { onSearch, onCancelSearch } = props;

	const handleChange = (e) => {
		setSearchText(e.target.value);
	};

	const handleCancelSearch = (e) => {
		setSearchText('');
	};

	useEffect(() => {
		searchText && searchText.length !== 0
			? onSearch(searchText)
			: onCancelSearch();
	}, [searchText]);

	return (
		<StyledPaper component='form'>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder='Search'
				inputProps={{ 'aria-label': 'search' }}
				value={searchText}
				//onChange={handleChange}
			/>
			{searchText && searchText.length !== 0 ? (
				<IconButton
					type='button'
					sx={{ p: '10px' }}
					aria-label='search'
					onClick={handleCancelSearch}
				>
					{/* <CloseIcon /> */}
				</IconButton>
			) : (
				<IconButton
					type='button'
					sx={{ p: '10px' }}
					aria-label='search'
					onClick={() => onSearch(searchText)}
				>
					{/* <SearchIcon /> */}
				</IconButton>
			)}
		</StyledPaper>
		// <Autocomplete
		// 	id='country-select-demo'
		// 	sx={{ width: 300 }}
		// 	options={countries}
		// 	autoHighlight
		// 	getOptionLabel={(option) => option.label}
		// 	renderOption={(props, option) => (
		// 		<Box
		// 			component='li'
		// 			sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
		// 			{...props}
		// 		>
		// 			<img
		// 				loading='lazy'
		// 				width='20'
		// 				src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
		// 				srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
		// 				alt=''
		// 			/>
		// 			{option.label} ({option.code}) +{option.phone}
		// 		</Box>
		// 	)}
		// 	renderInput={(params) => (
		// 		<StyledPaper component='form'>
		// 			<InputBase
		// 				sx={{ ml: 1, flex: 1 }}
		// 				placeholder='Search'
		// 				inputProps={{ 'aria-label': 'search' }}
		// 				value={searchText}
		// 				//onChange={handleChange}
		// 			/>
		// 			{searchText && searchText.length !== 0 ? (
		// 				<IconButton
		// 					type='button'
		// 					sx={{ p: '10px' }}
		// 					aria-label='search'
		// 					onClick={handleCancelSearch}
		// 				>
		// 					<CloseIcon />
		// 				</IconButton>
		// 			) : (
		// 				<IconButton
		// 					type='button'
		// 					sx={{ p: '10px' }}
		// 					aria-label='search'
		// 					onClick={() => onSearch(searchText)}
		// 				>
		// 					<SearchIcon />
		// 				</IconButton>
		// 			)}
		// 		</StyledPaper>
		// 	)}
		// />
	);
};

export default Search;
