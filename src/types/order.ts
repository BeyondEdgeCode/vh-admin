import {IUser} from "./user";


export enum EOrderDelivery{
    Pickup = 'pickup',
    Delivery = 'delivery'
}

export enum EOrderStatus {
    WaitPayment = 'awaiting_payment',
    Forming = 'forming',
    InDelivery = 'in_delivery',
    Finished = 'finished',
    CanceledBySystem = 'canceled_by_system',
    CanceledByUser = 'canceled_by_user',
    WaitingToRecieve = 'waiting_to_receive'
}

interface IDateFormatter {
    (data: string): Date
}
const dateFormatter: IDateFormatter = (data: string) => {
    return new Date(Date.parse(data))
}
export interface IOrderShort {
    id: number;
    status: EOrderStatus,
    sum: number,
    shop: IShopInformation,
    created_at: string
}

export interface IShopInformation {
    id: number,
    title: string,
    city: string,
    description: string,
    building: string,
    preview: string,
    street: string
}

interface ISubcategoryInfo{
    id: number;
    title: string;
}

interface ICategoryInfo {
    id: number,
    title: string,
    subcategories : Array<ISubcategoryInfo>
}
export interface IOrderProduct {
    id: number,
    title: string,
    categories: ICategoryInfo,
    description: string,
    price: number,
    quantity: number,
    image_link: string,
    avg_stars: number
}
export interface IOrderItemInformation{
    price: number,
    product: IOrderProduct,
    amount: number
    item_sum: number
}
interface IPromocodeType{
    type: string,
}
interface IPromocodeInfo{
    key: string,
    promotype: IPromocodeType,
    value: number
}
export interface IOrderInformation {
    id: number,
    user: IUser
    status: EOrderStatus,
    delivery_type: EOrderDelivery,
    payment_type: string,
    sum: number,
    shop: IShopInformation,
    items: Array<IOrderItemInformation>,
    created_at: string,
    promocode_ref: IPromocodeInfo
}