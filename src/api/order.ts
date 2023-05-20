import axios, {Method} from "axios";
import {ordersCancel, ordersChangeState, ordersGet, ordersGetOne} from "./api";
import {OPTIONS} from "./api";
import {baseURL} from "./api";
import {IOrderInformation, IOrderShort} from "../types/order";
import {IUnifiedResponse} from "../types/global";

export const getOrders = async () => {
    const token = localStorage.getItem('jwt');
    const res = await axios.get<Array<IOrderShort>>(
        ordersGet,
        OPTIONS('GET', String(token))
    );
    const r = await res.data;
    return {data: r, status: res.status};
};

export const getOrder = async (id: number) => {
    const token = localStorage.getItem('jwt');
    const opts = OPTIONS('GET', String(token))
    const res = await axios.get<IOrderInformation>(
        ordersGetOne,
        {...opts, params: {id: id}}

    );
    const r = await res.data;
    return {data: r, status: res.status};
};

export const changeState = async (state: string, orderId: number) => {
    const token = localStorage.getItem('jwt');
    const opts = OPTIONS('PATCH', String(token));
    const res = await axios.patch<IUnifiedResponse>(
        ordersChangeState, {id: orderId, next_state: state}, opts
    );
    return res.data;
}

export const cancelOrder = async (orderId: number) => {
    const token = localStorage.getItem('jwt');
    const opts = OPTIONS('DELETE', String(token));
    const res = await axios.delete<IUnifiedResponse>(
        ordersCancel, {...opts, params: { id: orderId }},
    );
    return res.data
}