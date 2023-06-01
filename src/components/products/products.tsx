import {Navbar, toBool} from "./navbar/navbar";
import {Outlet} from "react-router-dom";
import css from './products.module.css'

export const Products = () => {
    const links = [
        {
            title: 'Товары',
            to: '/products/list'
        },
        {
            title: 'Остатки',
            to: '/products/storage',
        },
        {
            title: 'Категории',
            to: '/products/categories',
        },
        {
            title: 'Подкатегории',
            to: '/products/subcategories',
        }];
    return (<div className={css.products}>
        <Navbar dirs={links}/>
        <Outlet/>
    </div>)
}