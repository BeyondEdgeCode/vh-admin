import axios, {Method} from "axios";
import {userAuthLogin, userAuthMe} from "./api";
import {OPTIONS} from "./api";
import {baseURL} from "./api";
import {setNewUserAuthKey} from "../components/store/user.store";
import {setLocalStorage} from "../utils/localStorage";

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
            setNewUserAuthKey(response.access_token)
            setLocalStorage('jwt', <string>response.access_token)
            return 'Ok'
    }

}