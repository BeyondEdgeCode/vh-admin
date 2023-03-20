import {setNewUserAuthKey} from "../store/user.store";
import {useObservable} from "../../utils/useObservable";
import {UserAuthData$} from "../store/user.store";
import css from './login.module.css'
import {useEffect, useState} from "react";
import {userLogin} from "../../api/user";

const loginHandler = (login: string, password: string) =>{
    userLogin(login, password).then(r => console.log(r))
}

export const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className={css.wrapper}>
            <div className={css.login}>
                <h1>Авторизация</h1>

                <label className={css.fieldLabel}>Логин</label>
                <input onChange={(e) => setLogin(e.target.value)} type="text"/>

                <label className={css.fieldLabel}>Пароль</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password"/>

                <button onClick={() => loginHandler(login, password)}>Войти</button>
            </div>
        </div>)
}