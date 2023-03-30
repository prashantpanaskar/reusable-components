import { createTheme } from '@mui/material';

let theme = createTheme({
	palette: {
		primary: {
			main: COLORS.BLUE,
		},
		secondary: {
			main: COLORS.RED,
		},
		text: {
			primary: COLORS.WHITE,
		},
		common: {
			black: COLORS.BLACK,
			white: COLORS.WHITE,
			baseWhite: COLORS.BASE_WHITE,
		},
	},
});

theme = createTheme(theme, {
	typography: {
		fontFamily: 'Raleway, Arial',
		body1: {
			fontWeight: 400,
			fontSize: theme.spacing(2.25),
			lineHeight: theme.spacing(3.125),
		},
		body2: {
			fontWeight: 300,
			fontSize: theme.spacing(2),
			lineHeight: theme.spacing(3.125),
		},
		body3: {
			fontWeight: 200,
			fontSize: theme.spacing(1.75),
			lineHeight: theme.spacing(2.375),
		},
		body4: {
			fontWeight: 400,
			fontSize: theme.spacing(1.5),
			lineHeight: theme.spacing(2),
		},
		body5: {
			fontWeight: 200,
			fontSize: theme.spacing(1.25),
			lineHeight: theme.spacing(2),
		},
		body6: {
			fontWeight: 300,
			fontSize: theme.spacing(1),
			lineHeight: theme.spacing(1.375),
		},
		header1: {
			fontWeight: 800,
			fontSize: theme.spacing(4.5),
			lineHeight: theme.spacing(6.125),
		},
		header2: {
			fontWeight: 700,
			fontSize: theme.spacing(3),
			lineHeight: theme.spacing(4.125),
		},
		header3: {
			fontWeight: 600,
			fontSize: theme.spacing(2.25),
			lineHeight: theme.spacing(3.125),
		},
		header4: {
			fontWeight: 300,
			fontSize: theme.spacing(2),
		},
	},
});

export default theme;
