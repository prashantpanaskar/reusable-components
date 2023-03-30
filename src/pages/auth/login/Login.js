import { useMsal } from '@azure/msal-react';
//Local imports
import { loginRequest } from 'authConfig';

const Login = () => {
	const { instance } = useMsal();
	instance.loginRedirect(loginRequest);
};

export default Login;
