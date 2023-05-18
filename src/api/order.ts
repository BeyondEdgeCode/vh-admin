import axios, {Method} from "axios";
import {ordersGet, ordersGetOne} from "./api";
import {OPTIONS} from "./api";
import {baseURL} from "./api";
import {IOrderInformation, IOrderShort} from "../types/order";

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