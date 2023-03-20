import {Method} from "axios";

export const baseURL = 'http://dockerbackend';
export const userAuthLogin = `${baseURL}/user/auth/login`
export const userAuthMe = `${baseURL}/user/auth/me`;

export const OPTIONS = (method: Method, jwt?: string) => ({
    method,
    headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer ' + jwt,
    },
    origin: baseURL,
});
