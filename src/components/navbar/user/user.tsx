import css from './user.module.css'

export const User = () => {
    return (
        <div className={css.user}>
            <span className={css.userName}>Евгений Финский</span>
        </div>
    )
}