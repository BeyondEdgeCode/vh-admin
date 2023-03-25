import { faHandshake } from '@fortawesome/free-regular-svg-icons';
import {
    faBoxesAlt,
    faDoorOpen,
    faPercent,
    faPerson,
    faWrench,
} from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { CheckPermission } from '../../utils/checkPermission';
import { toBool } from '../products/navbar/navbar';
import css from './navbar.module.css';
import { NavItem } from './navitem/navitem';

export const Navbar = () => {
    const location = useLocation();
    return (
        <div className={css.navbar}>
            {/*<Logo></Logo>*/}
            <CheckPermission
                permission={'admin.orders.access'}
                returnable={
                    <NavItem
                        key={'Orders'}
                        to={'/orders'}
                        fa={faHandshake}
                        text={'Заказы'}
                        selected={toBool(location, '/orders')}
                    />
                }
            />
            <CheckPermission
                permission={'admin.products.access'}
                returnable={
                    <NavItem
                        key={'Products'}
                        to={'/products'}
                        fa={faBoxesAlt}
                        text={'Товары'}
                        selected={toBool(location, '/products')}
                    />
                }
            />
            <CheckPermission
                permission={'admin.promo.access'}
                returnable={
                    <NavItem
                        key={'Promo'}
                        to={'/promo'}
                        fa={faPercent}
                        text={'Акции'}
                        selected={toBool(location, '/promo')}
                    />
                }
            />
            <CheckPermission
                permission={'admin.settings.access'}
                returnable={
                    <NavItem
                        key={'Settings'}
                        to={'/settings'}
                        fa={faWrench}
                        text={'Настройки'}
                        selected={toBool(location, '/settings')}
                    />
                }
            />
            <CheckPermission
                permission={'admin.access'}
                returnable={
                    <NavItem
                        key={'User'}
                        to={'/admin'}
                        selected={toBool(location, '/admin')}
                        text={'Администратор'}
                        fa={faPerson}
                    />
                }
            />
            <CheckPermission
                permission={'admin.access'}
                returnable={
                    <NavItem
                        key={'Exit'}
                        to={'/logout'}
                        fa={faDoorOpen}
                        text={'Выход'}
                        selected={toBool(location, '/logout')}
                    />
                }
            />
        </div>
    );
};
