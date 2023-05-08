import {Navigate, useParams} from "react-router-dom";
import css from './orderoutlet.module.css'
import {IOrderInformation} from "../../../types/order";


export const OrderOutlet = () => {
	const { orderId } = useParams();

	const mockData = {
		id: 1,
		status: 'forming',
		delivery_type: 'pickup',
		payment_type: 'postpayment',
		sum: 100.0,
		shop: {
			id: 1,
			title: 'Тестовый магазин',
			description: 'Тестовое описание магазина',
			city: "Тестовый город",
			building: '111',
			preview: 'none',
			street: 'Тестовый улица'
		},
		items: [
			{
				price: 100.0,
				product: {
					id: 8,
					title: "Товар 8",
					description: '',
					price: 100.0,
					image_link: "https://storage.yandexcloud.net/vapehookahstatic/q06n8jck8.jpg",
					avg_stars: 0
				},
				amount: 1,
				item_sum: 100.0
			}
		]

	} as IOrderInformation


	// if (orderId === undefined) {
	// 	return (<><Navigate to={'/orders'}/></>)
	// }
	return (
		<div className={css.container}>
			<div className={css.orderHeader}>
				<h2>#{mockData.id}</h2>
				<p>{mockData.status}</p>
				<p></p>
			</div>
		</div>
	)
}