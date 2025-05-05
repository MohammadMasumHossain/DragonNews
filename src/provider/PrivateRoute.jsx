import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading}=use(AuthContext);
    console.log(user);

    if(loading){
        return <span className="loading loading-dots loading-xl"></span>
    }
    //if --> user thake taile return children
    if(user && user?.email){
        return children;
    }
     
    return <Navigate to="/auth/login"></Navigate>

    //else navigate -->login
};

export default PrivateRoute;