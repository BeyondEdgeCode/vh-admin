import css from './button.module.css';

type TButton = {
    payload: Function
    title: string
    disabled?: boolean
}
export const DangerButton = ({payload, title, disabled}: TButton) => {
    return <button disabled={disabled} onClick={() => {payload()}} className={css.button}>{title}</button>
}