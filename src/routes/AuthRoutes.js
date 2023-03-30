/*
 * Login route definition.
 */

//Third party imports
import { useRoutes } from 'react-router';
import { lazy } from 'react';

// Local imports.
const Login = lazy(() => import('pages/auth/login/Login'));

const routes = {
	path: '/',
	element: <Login />,
	children: [
		{
			path: 'login',
			element: <Login />,
		},
	],
};

const AuthRoutes = () => {
	return useRoutes([routes]);
};

export default AuthRoutes;
