import css from './user.module.css'
import {Link} from "react-router-dom";
import classNames from "classnames";

type User = {
    selected: boolean
    to: string
}
export const User = ({to, selected}: User) => {
    return (
        <Link className={css.linkWrapper} to={to} replace={true}>
            <div className={css.user}>
                <div className={classNames([css.userCircle, selected ? css.selected : undefined])}>
                    <span className={css.userName}>ЕФ</span>
                </div>
            </div>
        </Link>
    )
}