import { UserPermissionsData$ } from '../components/store/user.store';
import { useObservable } from './useObservable';

type TCheckPermission = {
    permission: string;
    returnable: any;
};
export const CheckPermission = ({
    permission,
    returnable,
}: TCheckPermission) => {
    const roles = useObservable(UserPermissionsData$);
    if (roles?.includes('admin.all')) return returnable;
    return roles?.includes(permission) ? returnable : undefined;
};
