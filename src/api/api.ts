import {Method} from "axios";

export const baseURL = 'https://api.beyondedge.ru';
// export const baseURL = 'http://127.0.0.1:5000';
export const websiteURL = 'https://vapehookah.ru';
export const s3URL = 'https://storage.yandexcloud.net/vapehookahstatic/';
export const userAuthLogin = `${baseURL}/user/auth/login`;
export const userAuthMe = `${baseURL}/user/auth/me`;
export const userGet = `${baseURL}/user/admin/get`;

export const categoryGet = `${baseURL}/product/category`;

export const ordersGet = `${baseURL}/order/aget`;
export const ordersGetOne = `${baseURL}/order/aget_one`;
export const ordersChangeState = `${baseURL}/order/state`;
export const ordersCancel = `${baseURL}/order/acancel`;


export const s3Get = `${baseURL}/s3/get`;

export const icGet = `${baseURL}/ic/all`;
export const icCreate = `${baseURL}/ic/create`;
export const icUpdate = `${baseURL}/ic/update`;

export const OPTIONS = (method: Method, jwt?: string) => ({
    method,
    headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer ' + jwt,
    },
    origin: baseURL,
});
