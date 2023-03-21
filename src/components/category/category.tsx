import css from './category.module.css'
import {Table} from "./table/table";
export const Category = () => {
    return <div className={css.category}>
        <h3>Категории</h3>
        <div>
            <button onClick={()=> alert('123')} className={css.button}>Создать</button>
        </div>
        <Table/>
    </div>
}