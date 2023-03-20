import css from './navbar.module.css'
import {Logo} from "./logo/logo";
import {User} from "./user/user";
import {NavItem} from "./navitem/navitem";
import {faHandshake} from "@fortawesome/free-regular-svg-icons";
import {faBoxesAlt, faDoorOpen} from "@fortawesome/free-solid-svg-icons";
import {faWrench} from "@fortawesome/free-solid-svg-icons";
export const Navbar = () => {
    return (
        <div className={css.navbar}>
            <Logo></Logo>
            <User></User>
            <NavItem key={'Заказы'} to={'/orders'} fa={faHandshake} text={'Заказы'}></NavItem>
            <NavItem key={'Товары'} to={'/products'} fa={faBoxesAlt} text={'Товары'}></NavItem>
            <NavItem key={'Настройки'} to={'/settings'} fa={faWrench} text={'Настройки'}></NavItem>
            <NavItem key={'Выход'} to={'/logout'} fa={faDoorOpen} text={'Выход'}></NavItem>
        </div>
    )
}