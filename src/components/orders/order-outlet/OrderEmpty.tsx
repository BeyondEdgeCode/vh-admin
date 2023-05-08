import css from './orderoutlet.module.css'
export const OrderEmpty = () => {
	return (
		<div className={css.orderEmpty}>
			<span className={css.emptyMessage}>Заказ не выбран.</span>
		</div>
	)
}