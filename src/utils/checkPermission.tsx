import {ReactElement} from "react";
import {useObservable} from "./useObservable";
import {UserPermissionsData$} from "../components/store/user.store";

type CheckPermission = {
    permission: string
    returnable: any
}
export const CheckPermission = ({permission, returnable}: CheckPermission) => {
    const roles = useObservable(UserPermissionsData$)
    if (roles?.includes('admin.all'))
        return returnable
    return roles?.includes(permission) ? returnable : undefined
}