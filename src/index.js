//Third party imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { BrowserRouter } from 'react-router-dom';
//import { disableReactDevTools } from '@fvilers/disable-react-devtools';
//Local imports
import './index.css';
import App from 'pages/app/App';
import { msalConfig } from './authConfig';

const msalInstance = new PublicClientApplication(msalConfig);
// Disable React dev tools to avoid exposing state data.
//disableReactDevTools();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<MsalProvider instance={msalInstance}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</MsalProvider>
	</React.StrictMode>
);
