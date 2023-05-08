import css from './button.module.css';

type TButton = {
    onClick: Function
    title: string
    disabled?: boolean
}
export const PrimaryButton = ({onClick, title, disabled}: TButton) => {
    return <button
        disabled={disabled}
        onClick={() => {onClick()}} className={css.button}>
        {title}
    </button>
}