/*
 * Private route definition.
 */

//Third party imports
import { useRoutes } from 'react-router';
import { lazy } from 'react';

// Local imports.
import ProtectedRoute from 'components/protectedRoute/ProtectedRoute';
const Dashboard = lazy(() => import('pages/dashboard/Dashboard'));

const routes = {
	path: '/',
	element: (
		<ProtectedRoute>
			<Dashboard />
		</ProtectedRoute>
	),
	children: [
		{
			path: 'dashboard',
			element: (
				<ProtectedRoute>
					<Dashboard />
				</ProtectedRoute>
			),
		},
	],
};

const PrivateRoutes = () => {
	return useRoutes([routes]);
};

export default PrivateRoutes;
