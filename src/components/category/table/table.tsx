import css from './table.module.css'

type TableProps = {
    header: Array<string>
    data: Array<any>
}
export const Table = ({header, data}: TableProps) => {
    data.map(d => console.log(Object.entries(d)))
    return <table className={css.table}>
        <thead className={css.thead}>
        <tr className={css.headTr}>
            {header.map((h) => <td className={css.td}>{h}</td>)}
        </tr>
        </thead>
        <tbody>
        {data.map((d: Object) =>
            <tr>
                {Object.entries(d).map(([_, value]) => <td className={css.td}>{Array.isArray(value) ? 'Array' : value}</td>)}
            </tr>
        )}
        </tbody>
    </table>
}