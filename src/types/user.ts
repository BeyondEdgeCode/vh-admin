export interface IUserRole {
    id: number;
    roleName: string;
    roleDescription: string;
    permissions: string[];
}

export interface IUser {
    id: number;
    email: string;
    email_confirmed: boolean;
    firstName: string | null;
    lastName: string | null;
    birthDate: string | null;
    mobilephone: string | null;
    city: string | null;
    street: string | null;
    building: string | null;
    flat: string | null;
    zipcode: string | null;
    notificationsAgree: boolean;
    registrationDate: string;
    role: IUserRole;

}