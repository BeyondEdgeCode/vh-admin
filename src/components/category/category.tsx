import css from './category.module.css'
import {Table} from "./table/table";
import {useEffect, useState} from "react";
import {categoryGetApi} from "../../api/category";
import {UserAuthData$} from "../store/user.store";
import {useObservable} from "../../utils/useObservable";
import {TCategory} from "../../api/category";
import {PrimaryButton} from "../ui-kit/buttons/primaryButton/primaryButton";
import {SecondaryButton} from "../ui-kit/buttons/secondaryButton/secondaryButton";

export const Category = () => {
    const [tableData, setTableData] = useState<Array<TCategory>>([{id: 0, title: 'Загрузка данных...', subcategories: []}])
    const token = useObservable(UserAuthData$)

    useEffect(() => {
        categoryGetApi(token).then(d => setTableData(d))
    }, [])

    return <div className={css.category}>
        <h3 className={css.h3}>Категории</h3>
        <div className={css.buttons}>
            <PrimaryButton payload={() => alert(1234)} title={'Создать'}/>
            <SecondaryButton payload={() => alert(1234)} title={'Вторичная кнопка'}/>
            <SecondaryButton payload={() => alert(1234)} title={'Вторичная кнопка'}/>
            <SecondaryButton payload={() => alert(1234)} title={'Вторичная кнопка'}/>
            <SecondaryButton payload={() => alert(1234)} title={'Вторичная кнопка'}/>
            <SecondaryButton payload={() => alert(1234)} title={'Вторичная кнопка'}/>
        </div>
        <Table header={['№', 'Название', 'Подкатегории']} data={tableData}/>
    </div>
}