import axios from "axios";
import {icGet, icCreate, icUpdate} from "./api";
import {OPTIONS} from "./api";
import {IImageCarousel} from "../types/global";
import {IS3Object} from "../types/s3";

export const getICObjects = async () => {
    const token = localStorage.getItem('jwt');
    const res = await axios.get<Array<IImageCarousel>>(
        icGet,
        OPTIONS('GET', String(token))
    );
    const r = await res.data;
    return {data: r, status: res.status};
};

export const updateICObject = async (object: IImageCarousel) => {
    const token = localStorage.getItem('jwt');
    const res = await axios.patch(icUpdate, {
        id: object.id,
        active: object.active,
        image_id: object.image_id
    },
        OPTIONS('PATCH', String(token))
    );
    const r = await res.data;
    return {data: r, status: res.status};
}

export const addICObject = async (object: IImageCarousel) => {
    const token = localStorage.getItem('jwt');
    const res = await axios.post(icCreate, {
            active: object.active,
            image_id: object.image_id
        },
        OPTIONS('POST', String(token))
    );
    const r = await res.data;
    return {data: r, status: res.status};
}