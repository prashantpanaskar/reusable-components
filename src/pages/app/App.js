import {
	AuthenticatedTemplate,
	UnauthenticatedTemplate,
} from '@azure/msal-react';
//Local imports
import AuthRoutes from 'routes/AuthRoutes';
import PrivateRoutes from 'routes/PrivateRoutes';
import CssBaseline from '@mui/material/CssBaseline';

const App = () => {
	return (
		<>
			<CssBaseline />
			<AuthenticatedTemplate>
				<PrivateRoutes />
			</AuthenticatedTemplate>
			<UnauthenticatedTemplate>
				<AuthRoutes />
			</UnauthenticatedTemplate>
		</>
	);
};

export default App;
