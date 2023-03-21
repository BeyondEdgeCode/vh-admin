import {setUserPermissions} from "../store/user.store";
import {setIsAuth} from "../store/user.store";
import {setNewUserAuthKey} from "../store/user.store";
import {Navigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {setLocalStorage} from "../../utils/localStorage";
export const Logout = () => {
    const [state, setState] = useState(false)
    useEffect(()=>{
        setState(false)
        console.log('cleared')
        setUserPermissions(null)
        setNewUserAuthKey('')
        setLocalStorage('jwt', '')
        setIsAuth(false)
        setState(true)
    }, [])

    return (
        state ? <b>Выход</b> : <b>Выход</b>
    )
}