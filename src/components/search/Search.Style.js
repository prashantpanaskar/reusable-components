import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export const StyledPaper = styled(Paper)(({ theme }) => ({
	padding: '10px',
	display: 'flex',
	alignItems: 'center',
	width: '600px',
	height: '40px',
	borderRadius: '4px',
}));
