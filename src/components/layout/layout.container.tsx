import React, { useEffect } from 'react';
import { getUser } from '../../api/user';
import { runVM } from '../../utils/runVM';
import { setUserPermissions } from '../store/user.store';
import { Layout } from './layout';
import { newLayoutVM } from './layout.view-model';

export const LayoutContainer = () => {
    runVM(newLayoutVM());

    useEffect(() => {
        const userAuthToken = localStorage.getItem('jwt');

        userAuthToken &&
            getUser(userAuthToken).then((r) =>
                setUserPermissions(r.permissions)
            );
    }, []);
    return React.createElement(Layout, {});
};
