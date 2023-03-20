import {ReactElement} from "react";
import {useObservable} from "./useObservable";

type CheckPermission = {
    permission: string
    callback: ReactElement
}
export const CheckPermission = ({permission, callback}: CheckPermission) => {
    return 1
}