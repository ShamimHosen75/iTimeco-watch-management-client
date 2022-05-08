import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({children}) => {
    const { user} = useAuth();
    const location = useLocation();
    if (!user.accessToken) {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    else{
        return children;
    }
      
};

export default PrivateRoute;