import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { setLocalStorage } from '../../utils/localStorage';
import {
    setIsAuth,
    setNewUserAuthKey,
    setUserPermissions,
} from '../store/user.store';
export const Logout = () => {
    setLocalStorage('jwt', '');
    // localStorage.clear();
    setNewUserAuthKey(undefined);
    setUserPermissions([]);
    setIsAuth(false);

    return <Navigate to={'/login'} />;
};
