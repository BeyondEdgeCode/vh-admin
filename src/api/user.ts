import axios, {Method} from "axios";
import {baseURL, OPTIONS, userAuthLogin, userAuthMe, userGet} from "./api";
import {setIsAuth, setNewUserAuthKey} from "../components/store/user.store";
import {setLocalStorage} from "../utils/localStorage";
import {IUser} from "../types/user";

export type GetUser = {
    error?: string
    id?: number
    role?: string
    permissions?: Array<string>
}

export const getUser = async (token: string) => {
    const res = await axios.get<GetUser>(userAuthMe, OPTIONS('GET', token));
    const r = await res.data;
    return r;
};

type UserLogin = {
    status?: number
    error?: string
    access_token?: string
    refresh_token?: string
}

export const userLogin = async (login: string, password: string) => {
    const data = {
        email: login,
        password: password,
        remember: 1,
    };
    const options = {
        method: 'POST' as Method,
        headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        data: data,
        url: userAuthLogin,
        origin: baseURL,
    };

    const request = await axios.post<UserLogin>(userAuthLogin, data, options)

    const response = request.data

    switch (response.status){
        case 401:
            return 'Wrong password'
        default:
            setLocalStorage('jwt', response.access_token as string)
            setIsAuth(true)
            setNewUserAuthKey(response.access_token)
            return 'Ok'
    }

}

export const getUserById = async (id: number) => {
    const token = localStorage.getItem('jwt');
    const opts = OPTIONS('GET', String(token))
    const request = await axios.get<IUser>(userGet, {...opts, params:{id:id}})
    return request.data;
}