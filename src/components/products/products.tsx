import {Navbar} from "./navbar/navbar";
import {Outlet} from "react-router-dom";
import css from './products.module.css'

export const Products = () => {
    return (<div className={css.products}>
        <Navbar/>
        <Outlet/>
    </div>)
}