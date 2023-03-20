import {useEffect, useState} from "react";
import {Observable} from "rxjs";

export const useObservable = <T>(
    fa: Observable<T>,
    initial?: T
): T | undefined => {
    const [value, setValue] = useState(initial);
    useEffect(() => {
        const subscription = fa.subscribe(setValue);
        return () => subscription.unsubscribe();
    }, [fa, setValue]);

    return value;
};
