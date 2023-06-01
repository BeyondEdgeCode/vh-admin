import axios from "axios";
import {s3Get} from "./api";
import {OPTIONS} from "./api";
import {IS3Object} from "../types/s3";

export const getObjects = async () => {
    const token = localStorage.getItem('jwt');
    const res = await axios.get<Array<IS3Object>>(
        s3Get,
        OPTIONS('GET', String(token))
    );
    const r = await res.data;
    return {data: r, status: res.status};
};