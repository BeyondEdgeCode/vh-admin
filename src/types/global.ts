export interface IUnifiedResponse {
    status: number;
    msg: string;
}

export interface INavElement {
    title: string,
    to: string
}

export interface INavArray{
    dirs: Array<INavArray>
}

export interface IImageCarousel {
    id: number,
    image_id: number,
    image_link: string,
    active: boolean
}