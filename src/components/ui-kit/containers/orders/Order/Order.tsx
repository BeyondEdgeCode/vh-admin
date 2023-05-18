import css from './Order.module.css';
import {Navigate, useNavigate} from "react-router-dom";
import {IOrderShort} from "../../../../../types/order";
import {getOrderStatus} from "../../../../../utils/getOrderStatus";
import {translateDateToString} from "../../../../../utils/translateDateToString";

interface IOrderProps {
	info: IOrderShort;
}

export const Order = ({info}: IOrderProps) => {
	const navigate = useNavigate();
	return (
		<div className={css.container} onClick={()=>navigate(`/orders/${info.id}`)}>
			<div className={css.spaceBetween}>
				<p className={css.orderId}># {info.id}</p>
				<p className={css.status}>{getOrderStatus(info.status)}</p>
			</div>
			<div className={css.spaceBetween}>
				<p className={css.orderTotal}>Сумма: {info.sum} ₽</p>
				<p className={css.createdAt}>{translateDateToString(info.created_at)}</p>
			</div>
			<p className={css.orderShop}>Магазин: {info.shop.title}</p>
		</div>
	)
}