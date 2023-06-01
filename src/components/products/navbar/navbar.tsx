import { Location, useLocation } from 'react-router-dom';
import { NavElement } from './element/navElement';
import css from './navbar.module.css';
import {INavArray, INavElement} from "../../../types/global";

export const toBool = (navigation: Location, route: string) => {
    // TODO: move to utils
    return navigation.pathname.includes(route);
};


// TODO: God, please, fix this crap
// @ts-ignore
export const Navbar = ({dirs}) => {
    const location = useLocation();

    return (
        <div className={css.navbar}>
            {dirs.map((e: INavElement) => <NavElement title={e.title} to={e.to} selected={toBool(location, e.to)}/>

            )}
        </div>
    );
};