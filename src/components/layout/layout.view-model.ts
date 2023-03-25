import { useLocation, useNavigate } from 'react-router-dom';
import { tap } from 'rxjs';
import { getUser } from '../../api/user';
import {
    IsAuthData$,
    setIsAuth,
    setUserPermissions,
    UserPermissionsData$,
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
            if (location.pathname === '/login') {
                if (!!userAuthToken) {
                    getUser(userAuthToken).then((r) =>
                        isAdmin(r) ? loginUser(r.permissions) : disableAuth()
                    );
                }
            }
            if (!!x && !userAuthToken) {
                disableAuth();
            }
        })
    );

    // const userAuthData$ = UserPermissionsData$
    // .pipe
    // tap((_) => disableAuth()),
    // tap((x) => console.log(x, 'UserPermissionsData'))
    // ();

    // console.log(userAuthToken, 'ALARM');

    return {
        values: {},
        observers: {
            isAuth$,
            // userAuthData$,
        },
    };
};
