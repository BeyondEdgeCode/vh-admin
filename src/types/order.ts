export interface IShopInformation {
    id: number,
    title: string,
    city: string,
    description: string,
    building: string,
    preview: string,
    street: string
}
export interface IOrderProduct {
    id: number,
    title: string,
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
export interface IOrderInformation {
    id: number,
    status: string,
    delivery_type: string,
    payment_type: string,
    sum: number,
    shop: IShopInformation,
    items: Array<IOrderItemInformation>
}