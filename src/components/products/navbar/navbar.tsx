import { Location, useLocation } from 'react-router-dom';
import { NavElement } from './element/navElement';
import css from './navbar.module.css';

export const toBool = (navigation: Location, route: string) => {
    // TODO: move to utils
    return navigation.pathname.includes(route);
};

export const Navbar = () => {
    const location = useLocation();

    return (
        <div className={css.navbar}>
            <NavElement
                title={'Товары'}
                selected={toBool(location, '/products/list')}
                to={'/products/list'}
            />
            <NavElement
                title={'Остатки'}
                selected={toBool(location, '/products/storage')}
                to={'/products/storage'}
            />
            <NavElement
                title={'Категории'}
                selected={toBool(location, '/products/categories')}
                to={'/products/categories'}
            />
            <NavElement
                title={'Подкатегории'}
                selected={toBool(location, '/products/subcategories')}
                to={'/products/subcategories'}
            />
        </div>
    );
};
