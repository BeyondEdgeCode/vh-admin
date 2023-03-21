import {Navigate, Outlet, useLocation} from "react-router-dom"
import {Navbar} from "../navbar/navbar";
import {useEffect, useState} from "react";
import {getLocalStorage} from "../../utils/localStorage";
import {getUser} from "../../api/user";
import {setUserPermissions} from "../store/user.store";
import {IsAuthData$, setIsAuth} from "../store/user.store";
import {useObservable} from "../../utils/useObservable";
import {UserAuthData$} from "../store/user.store";

const isAdmin = (response: any) => {
    return response.permissions.includes('admin.all')
}

const loginUser = (permissions: Array<string> | undefined) => {
    setUserPermissions(permissions);
    setIsAuth(true);
}

export const Layout = () => {
    const location = useLocation()
    const isAuthData = useObservable(IsAuthData$)
    const userAuthData = useObservable(UserAuthData$)
    const userAuthToken = getLocalStorage('jwt')

    useEffect(() => {
        !!userAuthToken && getUser(userAuthToken).then(r =>  isAdmin(r) ? loginUser(r.permissions)
            : setIsAuth(false))
        }, [userAuthData])


    return (
        isAuthData || location.pathname == "/login" ?
        <>
        <Navbar/>
        <Outlet/>
        </>
        : <Navigate to='/login' replace={true}/>
    )
}