import axios from 'axios';
import { categoryGet, OPTIONS, userAuthMe } from './api';
import {getLocalStorage} from "../utils/localStorage";

export type TSubCategory = {
    id: number;
    title: string;
};

export type TCategory = {
    id: number;
    title: string;
    subcategories: Array<TSubCategory>;
};
export const categoryGetApi = async () => {
    const token = localStorage.getItem('jwt');
    const res = await axios.get<Array<TCategory>>(
        categoryGet,
        OPTIONS('GET', String(token))
    );
    const r = await res.data;
    return r;
};
