import {Navigate, useNavigate, useParams} from 'react-router-dom';
import {EOrderStatus, IOrderInformation} from '../../../types/order';
import css from './orderoutlet.module.css';
import {getOrderStatus} from "../../../utils/getOrderStatus";
import {PrimaryButton} from "../../ui-kit/buttons/primaryButton/primaryButton";
import {SecondaryButton} from "../../ui-kit/buttons/secondaryButton/secondaryButton";
import {DangerButton} from "../../ui-kit/buttons/dangerButton/dangerButton";
import {useEffect, useState} from "react";
import {getOrder} from "../../../api/order";
import {translateDateToString} from "../../../utils/translateDateToString";
import {OrderItem} from "./order-item/OrderItem";
import classNames from "classnames";
import {getUserById} from "../../../api/user";

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
                <PrimaryButton onClick={()=>alert(1)} title={'Primary'}/>

                <SecondaryButton payload={()=>alert(1)} title={'Secondary'}/>

                <DangerButton payload={()=>alert(1)} title={'Danger'}/>
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

            <div className={css.orderItemsList}>
                {orderInformation.items.map(i => <OrderItem item={i}/>)}
            </div>
        </div>
    );
};
