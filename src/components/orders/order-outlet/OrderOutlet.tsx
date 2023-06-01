import {Navigate, useParams} from 'react-router-dom';
import {EOrderDelivery, EOrderStatus, IOrderInformation} from '../../../types/order';
import css from './orderoutlet.module.css';
import {getOrderStatus} from "../../../utils/getOrderStatus";
import {PrimaryButton} from "../../ui-kit/buttons/primaryButton/primaryButton";
import {DangerButton} from "../../ui-kit/buttons/dangerButton/dangerButton";
import {useEffect, useState} from "react";
import {cancelOrder, changeState, getOrder} from "../../../api/order";
import {translateDateToString} from "../../../utils/translateDateToString";
import {OrderItem} from "./order-item/OrderItem";
import classNames from "classnames";

export const OrderOutlet = () => {
    const { orderId } = useParams();
    const [orderInformation, setOrderInformation] = useState<IOrderInformation | undefined | number>(undefined);
    const [userInformation, setUserInformation] = useState(undefined);

    useEffect(() => {
        getOrder(Number(orderId)).then(r => {setOrderInformation(r.data)});
    }, [orderId])

    if (orderInformation === undefined){
        return <></>
    }
    if (typeof orderInformation === "number"){
        return <Navigate to='/404'/>
    }

    const changeStatus = (stage: string, orderId: number) => {changeState(stage, orderId).then((r) => alert(r.msg))}
    const cancel = (id: number) => {cancelOrder(id).then((r) => alert(r.msg))}

    return (
        <div className={css.container}>
            <div className={css.row}>
                <h2 className={css.row_element}>Заказ №{orderInformation.id}</h2>
                <span>{getOrderStatus(orderInformation.status)}</span>
            </div>
            <div className={css.row}>
                <p>
                    от {translateDateToString(orderInformation.created_at)}
                </p>
            </div>


            <div className={classNames(css.row, css.extra_margin)}>
                {
                    orderInformation.status === EOrderStatus.Forming &&
                    orderInformation.delivery_type === EOrderDelivery.Pickup?
                        <PrimaryButton onClick={()=>changeStatus(EOrderStatus.WaitingToRecieve, orderInformation.id)} title={'Готов к вручению'}/> : null
                }
                {
                    orderInformation.status === EOrderStatus.Forming &&
                    orderInformation.delivery_type === EOrderDelivery.Delivery?
                        <PrimaryButton onClick={()=>changeStatus(EOrderStatus.InDelivery, orderInformation.id)} title={'Заказ отправлен'}/> : null
                }
                {
                    orderInformation.status === EOrderStatus.InDelivery ?
                        <PrimaryButton onClick={()=>changeStatus(EOrderStatus.Finished, orderInformation.id)} title={'Завершить'}/> : null
                }
                {
                    orderInformation.status === EOrderStatus.WaitingToRecieve ?
                        <PrimaryButton onClick={()=>changeStatus(EOrderStatus.Finished, orderInformation.id)} title={'Завершить'}/> : null
                }
                {
                    orderInformation.status !== EOrderStatus.Finished &&
                    orderInformation.status !== EOrderStatus.CanceledBySystem &&
                    orderInformation.status !== EOrderStatus.CanceledByUser ?
                        <DangerButton payload={()=> cancel(orderInformation.id)} title={'Отменить заказ'}/> : null
                }
            </div>

            <div className={css.userInfo}>
                <div className={css.userInfoWrapper}>
                    <div className={css.info_row}>
                        <p className={css.defaultText}>Пользователь: </p>
                        <p className={css.infoData}>{`${orderInformation.user.firstName} ${orderInformation.user.lastName}`}</p>
                    </div>
                    <div className={css.info_row}>
                        <p className={css.defaultText}>Телефон: </p>
                        <p className={css.infoData}>{`${orderInformation.user.mobilephone}`}</p>
                    </div>
                    <div className={css.info_row}>
                        <p className={css.defaultText}>Email: </p>
                        <p className={css.infoData}>{`${orderInformation.user.email}`}</p>
                    </div>
                    <div className={css.info_row}>
                        <p className={css.defaultText}>Дата регистрации: </p>
                        <p className={css.infoData}>{`${translateDateToString(orderInformation.user.registrationDate)}`}</p>
                    </div>
                </div>
            </div>
            {
                orderInformation.promocode_ref !== null ?
                    <div className={css.userInfo}>
                        <div className={css.userInfoWrapper}>
                            <div className={css.info_row}>
                                <p className={css.defaultText}>Промокод: </p>
                                <p className={css.infoData}>{`${orderInformation.promocode_ref.key}`}</p>
                            </div>
                            <div className={css.info_row}>
                                <p className={css.defaultText}>Тип промокода: </p>
                                <p className={css.infoData}>{
                                    orderInformation.promocode_ref.promotype.type === 'fixed' ? 'Фиксированный'
                                    : orderInformation.promocode_ref.promotype.type === 'percent' ? 'Процентный' : 'Ошибка'
                                }</p>
                            </div>
                            <div className={css.info_row}>
                                <p className={css.defaultText}>Номинал: </p>
                                <p className={css.infoData}>{`${orderInformation.promocode_ref.value}`}</p>
                            </div>
                        </div>
                    </div> :
                    null
            }


            <div className={css.orderItemsList}>
                {orderInformation.items.map(i => <OrderItem item={i}/>)}
            </div>
        </div>
    );
};
