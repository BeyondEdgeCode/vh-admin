import css from './navitem.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import classNames from "classnames";

type NavItem = {
    fa: IconDefinition,
    text: string
    to: string
    selected: boolean
}

export const NavItem = ({fa, text, to, selected}: NavItem) => {
    return (
        <Link to={to} className={css.navItem}>
            <FontAwesomeIcon className={css.icon}
                             icon={fa}
            />
            <span className={classNames([css.itemInfo, selected ? css.selected : undefined])}>{text}</span>
        </Link>
    )
}