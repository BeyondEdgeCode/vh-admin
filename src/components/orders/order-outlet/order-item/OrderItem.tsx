import {IOrderItemInformation} from "../../../../types/order";
import css from "./orderitem.module.css"
import classNames from "classnames";
import {websiteURL} from "../../../../api/api";
interface IOrderItemProps {
	item: IOrderItemInformation
}
export const OrderItem = ({item}: IOrderItemProps) => {
	return (
		<div className={css.container}>

			<div className={css.info}>
				<div className={css.infoLeft}>
					<img src={item.product.image_link} alt="" className={css.image}/>
				</div>
				<div className={css.infoRight}>
					<p className={css.title}><a href={websiteURL+`/product/${item.product.id}`}>{item.product.title}</a></p>
					<p className={classNames(css.defaultText, css.category)}>
						{item.product.categories.title}
						{item.product.categories.subcategories.map(s => ` / ${s.title}`)}
					</p>
				</div>
            </div>

			<div className={css.financial}>
				<div className={css.rowContainer}>
					<p className={css.defaultText}>Цена: </p>
					<p>{item.price} ₽</p>
				</div>
				<div className={css.rowContainer}>
                    <p className={css.defaultText}>Сумма: </p>
                    <p>{item.item_sum} ₽</p>
                </div>
				<div className={css.rowContainer}>
					<p className={css.defaultText}>Количество: </p>
					<p>{item.amount} шт.</p>
				</div>
            </div>
		</div>
	)
}