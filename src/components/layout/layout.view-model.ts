import { useLocation, useNavigate } from 'react-router-dom';
import { tap } from 'rxjs';
import { getUser } from '../../api/user';
import {
    IsAuthData$,
    setIsAuth,
    setUserPermissions,
} from '../store/user.store';

export const newLayoutVM = () => {
    const disableAuth = () => {
        setUserPermissions([]);
        setIsAuth(false);
        navigator('/login');
    };

    const isAdmin = (response: any) =>
        response.permissions.includes('admin.all');

    const loginUser = (permissions: Array<string> | undefined) => {
        navigator('/orders');
        setUserPermissions(permissions);
        setIsAuth(true);
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigator = useNavigate();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const location = useLocation();

    const isAuth$ = IsAuthData$.pipe(
        tap((x) => {
            const userAuthToken = localStorage.getItem('jwt');
            if (!!userAuthToken && location.pathname === '/login') {
                getUser(userAuthToken).then((r) =>
                    isAdmin(r) ? loginUser(r.permissions) : disableAuth()
                );
            }
            if (!!x && !userAuthToken) {
                disableAuth();
            }
        })
    );

    return {
        values: {},
        observers: {
            isAuth$,
        },
    };
};
