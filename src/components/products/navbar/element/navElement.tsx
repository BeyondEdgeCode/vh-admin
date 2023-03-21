import css from './element.module.css'
import classNames from "classnames";
import {Link} from "react-router-dom";

type NavElement = {
    title: string
    selected: boolean
    to: string
}
export const NavElement = ({title, selected, to}: NavElement) => {

    return (
        <Link to={to} className={css.textHref}>
            <div className={classNames([css.element, selected ? css.selected : undefined])}>
                <span className={css.text}>{title}</span>
            </div>
        </Link>
    )
}