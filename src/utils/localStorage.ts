/* eslint-disable react-hooks/rules-of-hooks */
import {useEffect, useState} from "react";

export const getLocalStorage = (key: string) => {
    const [s, Us] = useState<string | null>(null);
    useEffect(() => {
        Us(localStorage.getItem(key));
    }, []);
    return s;
};

export const setLocalStorage = (key: string, item: string) => {
    localStorage.setItem(key, item);
};