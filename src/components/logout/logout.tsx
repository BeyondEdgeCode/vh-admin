import {setUserPermissions} from "../store/user.store";
import {setIsAuth} from "../store/user.store";
import {setNewUserAuthKey} from "../store/user.store";
import {Navigate, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {setLocalStorage} from "../../utils/localStorage";
export const Logout = () => {
    console.log('cleared')
    // setLocalStorage('jwt', '')
    localStorage.clear()
    // setNewUserAuthKey(undefined)
    // setUserPermissions(null)
    // setIsAuth(false)

    return (
        <Navigate to={'/login'}/>
    )
}