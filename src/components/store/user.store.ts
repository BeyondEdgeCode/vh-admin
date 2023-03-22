import {BehaviorSubject} from "rxjs";
import {createSetterStore} from "../../utils/createSetterStore";

const userAuthKey$ = new BehaviorSubject<string | null | undefined>(null)
const userPermissions$ = new BehaviorSubject<Array<string> | null | undefined>(null)
const isAuth$ = new BehaviorSubject<boolean>(true)

export const setNewUserAuthKey = createSetterStore(userAuthKey$)
export const setUserPermissions = createSetterStore(userPermissions$)
export const setIsAuth = createSetterStore(isAuth$)

export const UserAuthData$ = userAuthKey$.asObservable()
export const UserPermissionsData$ = userPermissions$.asObservable()
export const IsAuthData$ = isAuth$.asObservable()
