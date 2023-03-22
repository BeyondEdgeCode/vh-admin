import {categoryGet, userAuthMe} from "./api";
import {OPTIONS} from "./api";
import axios from "axios";

export type TSubCategory = {
    id: number
    title: string
}

export type TCategory = {
    id: number
    title: string
    subcategories: Array<TSubCategory>
}
export const categoryGetApi = async (token: string | undefined | null) => {
    const res = await axios.get<Array<TCategory>>(categoryGet, OPTIONS('GET', String(token)));
    const r = await res.data;
    return r;
}