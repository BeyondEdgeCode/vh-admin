import {setNewUserAuthKey} from "../store/user.store";
import {useObservable} from "../../utils/useObservable";
import {UserAuthData$} from "../store/user.store";
import css from './login.module.css'
import {useEffect, useState} from "react";
import {userLogin} from "../../api/user";
import {NavigateFunction, redirect, useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';

const loginHandler = (login: string, password: string, nav: NavigateFunction, setState: React.Dispatch<any>) =>{
    setState('Авторизация в процессе...')
    userLogin(login, password).then(r => r == 'Ok' ? nav('/orders'): setState('Неверный логин или пароль.'))
}

export const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loginState, setLoginState] = useState('')
    const nav = useNavigate()
    return (
        <div className={css.wrapper}>
            <div className={css.login}>
                <h1>Авторизация</h1>

                <label className={css.fieldLabel}>Логин</label>
                <input onChange={(e) => setLogin(e.target.value)} type="text"/>

                <label className={css.fieldLabel}>Пароль</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password"/>

                <button onClick={() => loginHandler(login, password, nav, setLoginState)}>Войти</button>
                <span>{loginState}</span>
            </div>
        </div>)
}