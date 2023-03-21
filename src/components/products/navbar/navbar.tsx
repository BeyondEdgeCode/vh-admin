import css from './navbar.module.css'
import {NavElement} from './element/navElement'
import {Location, useLocation, useNavigation} from "react-router-dom";

export const toBool = (navigation: Location, route: string) => {
    if (navigation.pathname.includes(route)){
        return true
    }else{
        return false
    }
}

export const Navbar = () => {
    const location = useLocation()

    return (
        <div className={css.navbar}>
            <NavElement title={'Товары'} selected={toBool(location, '/products/list')} to={'/products/list'}/>
            <NavElement title={'Остатки'} selected={toBool(location, '/products/storage')} to={'/products/storage'}/>
            <NavElement title={'Категории'} selected={toBool(location, '/products/categories')} to={'/products/categories'}/>
            <NavElement title={'Подкатегории'} selected={toBool(location, '/products/subcategories')} to={'/products/subcategories'}/>
        </div>
    )
}