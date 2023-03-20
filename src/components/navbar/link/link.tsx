import css from './link.module.css'

type Link = {
    href: string
    text: string
}
export const Link = (props: Link) => {
    return (
        <a className={css.link} href={props.href}>{props.text}</a>
    )
}