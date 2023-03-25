import { useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { userLogin } from '../../api/user';
import css from './login.module.css';

const loginHandler = (
    login: string,
    password: string,
    nav: NavigateFunction,
    setState: (s: string) => void
) => {
    setState('Авторизация в процессе...');
    userLogin(login, password).then((r) =>
        r === 'Ok' ? nav('/orders') : setState('Неверный логин или пароль.')
    );
};

export const Login = () => {
    const [login, setLogin] = useState('me@evgeniy.host');
    const [password, setPassword] = useState('test1234');
    const [loginState, setLoginState] = useState('');

    const nav = useNavigate();
    return (
        <div className={css.wrapper}>
            <div className={css.login}>
                <h1>Авторизация</h1>

                <label className={css.fieldLabel}>Логин</label>
                <input onChange={(e) => setLogin(e.target.value)} type="text" />

                <label className={css.fieldLabel}>Пароль</label>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />

                <button
                    onClick={() =>
                        loginHandler(login, password, nav, setLoginState)
                    }
                >
                    Войти
                </button>
                <span>{loginState}</span>
            </div>
        </div>
    );
};
