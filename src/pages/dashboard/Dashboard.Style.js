import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';

export const StyledBox = styled(Box)(({ theme }) => ({
	flexGrow: 1,
}));

export const StyledCapitalizedBox = styled(Box)(({ theme }) => ({
	textTransform: 'capitalize',
	margin: '10px',
}));

export const StyledAppNameTypography = styled(Typography)(({ theme }) => ({
	size: '30px',
	color: 'blue'
}));

export const StyledAppbar = styled(AppBar)(({ theme }) => ({
	backgroundColor: '#ffffff',
	height:'65px'
}));