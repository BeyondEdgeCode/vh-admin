import css from './button.module.css';

type TButton = {
    payload: Function
    title: string
}
export const PrimaryButton = ({payload, title}: TButton) => {
    return <button onClick={() => {payload()}} className={css.button}>{title}</button>
}