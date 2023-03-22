import css from './table.module.css'
import PlaceholderLoading from 'react-placeholder-loading'

type TableProps = {
    header: Array<string>
    data: Array<any>
    isLoaded: boolean
}
export const Table = ({header, data, isLoaded}: TableProps) => {
    data.map(d => console.log(Object.entries(d)))
    return <table className={css.table}>
        <thead className={css.thead}>
        <tr className={css.headTr}>
            {header.map((h) => <td className={css.td}>{h}</td>)}
        </tr>
        </thead>
        <tbody>
        {
            isLoaded ?
                data.map((d: Object) =>
                    <tr>
                        {Object.entries(d).map(([_, value]) => <td className={css.td}>{Array.isArray(value) ? 'Array' : value}</td>)}
                    </tr>
                )
                    :
                Array(10).fill(1).map((i) =>
                    <tr>
                        {
                            Array(header.length).fill(1).map(() =>
                                <td className={css.td}><PlaceholderLoading shape="rect" width={'100%'} height={8} /></td>
                            )
                        }
                    </tr>
                )
        }
        </tbody>
    </table>
}