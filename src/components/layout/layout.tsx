import {Navigate, Outlet, useLocation} from "react-router-dom"
import {Navbar} from "../navbar/navbar";
import {useEffect, useState} from "react";
import {getLocalStorage} from "../../utils/localStorage";
import {getUser} from "../../api/user";
import {setUserPermissions} from "../store/user.store";
import {IsAuthData$, setIsAuth} from "../store/user.store";
import {useObservable} from "../../utils/useObservable";
import {UserAuthData$} from "../store/user.store";
import css from './layout.module.css'
import {useNavigate} from "react-router-dom";
const isAdmin = (response: any) => {
    const a = response.permissions.includes('admin.all')
    return a
}

const loginUser = (permissions: Array<string> | undefined) => {
    setUserPermissions(permissions);
    setIsAuth(true);
    console.log('logged in')
}

export const Layout = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const isAuthData = useObservable(IsAuthData$)
    const userAuthData = useObservable(UserAuthData$)
    const userAuthToken = getLocalStorage('jwt')

    useEffect(() => {
        if (!!userAuthToken){
            console.log('im here')
            getUser(userAuthToken).then(r =>  isAdmin(r) ? loginUser(r.permissions) : setIsAuth(false))
        }else{
            console.log(userAuthToken, 'current token')
            setIsAuth(false);
        }
        console.log(isAuthData, 'in use effect')
        }, [isAuthData, userAuthToken])

    useEffect(()=>{
        if (isAuthData == false && !userAuthToken){
            navigate('/login')
        }
    }, [isAuthData, location.pathname, navigate])

    console.log(typeof isAuthData == "undefined", '123')
    return (
            <div className={css.layout}>
                <Navbar/>
                <Outlet/>
            </div>
    )
}