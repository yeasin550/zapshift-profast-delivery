
import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContex';

const useAuth = () => {
    const authInfo = use(AuthContext)
    return authInfo; 
};

export default useAuth;