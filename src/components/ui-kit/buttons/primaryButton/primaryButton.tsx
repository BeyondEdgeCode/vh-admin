import css from './button.module.css';

type TButton = {
    onClick: Function
    title: string
}
export const PrimaryButton = ({onClick, title}: TButton) => {
    return <button onClick={() => {onClick()}} className={css.button}>{title}</button>
}