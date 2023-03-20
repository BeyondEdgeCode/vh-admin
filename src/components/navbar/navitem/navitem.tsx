import css from './navitem.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

type NavItem = {
    fa: IconDefinition,
    text: string
    to: string
}

export const NavItem = ({fa, text, to}: NavItem) => {
    return (
        <Link to={to} className={css.navItem}>
            <FontAwesomeIcon className={css.icon}
                             icon={fa}
            />
            <span className={css.itemInfo}>{text}</span>
        </Link>
    )
}