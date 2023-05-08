import css from './Order.module.css';
import {Navigate, useNavigate} from "react-router-dom";

interface IOrderProps {
	id: number;
	totalPrice: number;
	shop: string;
	status: string;
	createdAt: string;

}

export const Order = ({id, totalPrice, shop, status, createdAt}: IOrderProps) => {
	const navigate = useNavigate();
	return (
		<div className={css.container} onClick={()=>navigate(`/orders/${id}`)}>
			<div className={css.spaceBetween}>
				<p className={css.orderId}># {id}</p>
				<p className={css.status}>{status}</p>
			</div>
			<div className={css.spaceBetween}>
				<p className={css.orderTotal}>Сумма: {totalPrice}₽</p>
				<p className={css.createdAt}>{createdAt}</p>
			</div>
			<p className={css.orderShop}>Магазин: {shop}</p>
		</div>
	)
}