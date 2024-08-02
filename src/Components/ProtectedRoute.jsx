
import React from 'react';
import { Navigate } from 'react-router-dom';
import useLoginStatus from '../hooks/useLoginStatus';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ element: Component, ...rest }) => {
    const {isLoggedIn } = useLoginStatus();
    return isLoggedIn ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
