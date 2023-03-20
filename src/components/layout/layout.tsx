import {Link, Navigate, Outlet, useLocation} from "react-router-dom"
import {Navbar} from "../navbar/navbar";
import {useEffect, useState} from "react";
import {getLocalStorage} from "../../utils/localStorage";
import {getUser} from "../../api/user";
import {setUserPermissions} from "../store/user.store";
import {UserPermissionsData$} from "../store/user.store";
import {redirect} from "react-router-dom";
import {IsAuthData$, setIsAuth} from "../store/user.store";
import {useObservable} from "../../utils/useObservable";

const getUserInfo = (token: string) => {
    const info = getUser(token).then(r => !!r.permissions)
    return info
}

const isAdmin = (response: any) => {
    return response.permissions.includes('admin.all')
}

const setInfo = (permissions: Array<string> | undefined) => {
    setUserPermissions(permissions);
    setIsAuth(true);
}

export const Layout = () => {
    const location = useLocation()
    const userAuthToken = getLocalStorage('jwt')
    const isAuthData = useObservable(IsAuthData$)
    const userPermissions = useObservable(UserPermissionsData$)

    useEffect(() => {
        !!userAuthToken && getUser(userAuthToken).then(r =>  isAdmin(r) ? setInfo(r.permissions)
            : setIsAuth(false))
        }, [userAuthToken])


    return (
        isAuthData || location.pathname == "/login" ?
        <>
        <Navbar/>
        <Outlet/>
        </>
        : <Navigate to='/login' replace={true}/>
    )
}