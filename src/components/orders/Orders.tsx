import {Order} from "../ui-kit/containers/orders/Order/Order";
import css from './orders.module.css';
import {Outlet} from "react-router-dom";
import {useState} from "react";
import PlaceholderLoading from "react-placeholder-loading";
export const Orders = () => {

	const [currentOrder, setCurrentOrder] = useState(undefined)

	return (
		<div className={css.orders}>
			<div className={css.sidebar}>

				<Order id={1} shop={"Володарского 138"} createdAt={"Сегодня, 23:00"} status={"В обработке"} totalPrice={350.99} />
				<Order id={2} shop={"Володарского 138"} createdAt={"Сегодня, 23:00"} status={"В обработке"} totalPrice={350.99} />
				<Order id={3} shop={"Володарского 138"} createdAt={"Сегодня, 23:00"} status={"В обработке"} totalPrice={350.99} />
				<Order id={4} shop={"Володарского 138"} createdAt={"Сегодня, 23:00"} status={"В обработке"} totalPrice={350.99} />
				<Order id={5} shop={"Володарского 138"} createdAt={"Сегодня, 23:00"} status={"В обработке"} totalPrice={350.99} />
				<Order id={6} shop={"Володарского 138"} createdAt={"Сегодня, 23:00"} status={"В обработке"} totalPrice={350.99} />
				<Order id={7} shop={"Володарского 138"} createdAt={"Сегодня, 23:00"} status={"В обработке"} totalPrice={350.99} />
				<Order id={8} shop={"Володарского 138"} createdAt={"Сегодня, 23:00"} status={"В обработке"} totalPrice={350.99} />
				<Order id={9} shop={"Володарского 138"} createdAt={"Сегодня, 23:00"} status={"В обработке"} totalPrice={350.99} />
				<Order id={10} shop={"Володарского 138"} createdAt={"Сегодня, 23:00"} status={"В обработке"} totalPrice={350.99} />
			</div>
			<Outlet/>
		</div>
	)
}