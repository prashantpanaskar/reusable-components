import React, { useEffect, useState } from 'react';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { useNavigate } from 'react-router';

const ProtectedRoute = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const { instance } = useMsal();
	const navigate = useNavigate();
	const isUserAuthenticated = useIsAuthenticated();

	// const checkUserToken = () => {
	// 	const userToken = sessionStorage.getItem('user-token');

	// 	if (!userToken || userToken === 'undefined') {
	// 		setIsLoggedIn(false);
	// 		console.log('session invalid', userToken);
	// 		navigate('/auth/login');
	// 		return;
	// 	}
	// 	console.log('session valid');
	// 	setIsLoggedIn(true);
	// };

	// useEffect(() => {
	// 	checkUserToken();
	// }, [isLoggedIn]);

	return <>{isUserAuthenticated ? props.children : null}</>;
};

export default ProtectedRoute;
