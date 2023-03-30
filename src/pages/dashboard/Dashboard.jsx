//Third party library imports
import React, { useState, useEffect } from 'react';
import { useMsal } from '@azure/msal-react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

//Local imports
import { SignOutButton } from 'components/signOutButton/SignOutButton';
import Search from 'components/search/Search';
import DataGrid from 'components/dataGrid/DataGrid';
import { callMsGraph } from 'graph';
import { loginRequest } from 'authConfig';
import { data as jsonData } from 'data/data';
import { dataGrid1Headers, dataGrid2Headers } from 'data/headers';
import {
	StyledBox,
	StyledAppNameTypography,
	StyledCapitalizedBox,
	StyledAppbar,
} from './Dashboard.Style';

const Dashboard = () => {
	const [data, setdata] = useState(jsonData);
	const [searchText, setSearchText] = useState(null);
	const { instance, accounts } = useMsal();

	const request = {
		...loginRequest,
		account: accounts[0],
	};

	const name = accounts[0] && accounts[0].name;

	const handleSearch = (searchText) => {
		setSearchText(searchText);
	};

	const handleCancelSearch = () => {
		setSearchText(null);
	};

	const DetailPanelContent = ({ row }) => {
		return (
			row?.items && (
				<DataGrid headers={dataGrid2Headers} data={row.items} />
			)
		);
	};

	const getDetailPanelContent = (row) => {
		return React.memo(<DetailPanelContent row={row} />);
	};

	useEffect(() => {
		instance
			.acquireTokenSilent(request)
			.then((response) => {
				callMsGraph(response.accessToken).then((response) => {
					sessionStorage.setItem('loggedInUserData', response);
				});
			})
			.catch((e) => {
				instance.acquireTokenPopup(request).then((response) => {
					callMsGraph(response.accessToken).then((response) =>
						sessionStorage.setItem('loggedInUserData', response)
					);
				});
			});
	}, []);

	return (
		<StyledBox>
			<StyledAppbar position='static'>
				<Toolbar>
					<Grid
						container
						alignItems='center'
						justifyContent='space-between'
					>
						<Grid item>
							<Stack
								direction='row'
								spacing={3}
								alignItems='center'
								justifyContent='center'
							>
								<StyledAppNameTypography>
									APP
								</StyledAppNameTypography>
								<Divider
									sx={{ height: 28, m: 0.5 }}
									orientation='vertical'
								/>
								<Search
									onSearch={handleSearch}
									onCancelSearch={handleCancelSearch}
								/>
							</Stack>
						</Grid>
						<Grid item>
							<Stack
								direction='row'
								alignItems='center'
								justifyContent='center'
							>
								<Typography
									component={'div'}
									sx={{ color: 'black' }}
								>
									<StyledCapitalizedBox>
										Welcome, {name}
									</StyledCapitalizedBox>
								</Typography>
								<SignOutButton />
							</Stack>
						</Grid>
					</Grid>
				</Toolbar>
			</StyledAppbar>
			<Box sx={{ m: 2 }}>
				<Box
					sx={{
						size: '16px',
						fontWeight: 'bold',
						marginBottom: '10px',
						marginLeft: '5px',
						textDecoration: 'underline',
					}}
				>
					<Typography>My List</Typography>
				</Box>
				{data ? (
					<DataGrid
						headers={dataGrid1Headers}
						data={data}
						pagination
						rowsPerPageOptions={[5, 10, 15]}
						getDetailPanelContent={getDetailPanelContent}
					/>
				) : (
					<Typography>No data available...</Typography>
				)}
			</Box>
		</StyledBox>
	);
};

export default Dashboard;
