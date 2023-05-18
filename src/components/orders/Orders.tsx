import {Order} from "../ui-kit/containers/orders/Order/Order";
import css from './orders.module.css';
import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import PlaceholderLoading from "react-placeholder-loading";
import { getOrders } from "../../api/order";
import {IOrderShort} from "../../types/order";
export const Orders = () => {

	// const [currentOrder, setCurrentOrder] = useState(undefined)
	const [orders, setOrders] = useState<undefined | Array<IOrderShort>>(undefined);

	useEffect(() => {
		getOrders().then(r => setOrders(r.data))
	}, [])
	return (
		<div className={css.orders}>
			<div className={css.sidebar}>
				{
					orders && orders.map(order => <Order key={order.id} info={order}/>)
				}
				{/*<Order/>*/}
			</div>
			<Outlet/>
		</div>
	)
}