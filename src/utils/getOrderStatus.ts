export const getOrderStatus = (status: string) => {
    switch (status) {
        case 'awaiting_payment':
            return 'Ожидает оплаты'
        case 'forming':
            return 'Формируется'
        case 'in_delivery':
            return 'Доставка'
        case 'finished':
            return 'Завершён'
        case 'canceled_by_system':
            return 'Отменен системой'
        case 'canceled_by_user':
            return 'Отменен'
        case 'waiting_to_receive':
            return 'Ожидает получения'
        default:
            return 'Неизвестный статус'
    }
}