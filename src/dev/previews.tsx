import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import {Orders} from "../components/orders/Orders";
import {Order} from "../components/ui-kit/containers/orders/Order/Order";
import {OrderOutlet} from "../components/orders/order-outlet/OrderOutlet";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Orders">
                <Orders/>
            </ComponentPreview>
            <ComponentPreview path="/Order">
                <Order id={1} shop={"Володарского 138"} createdAt={"Сегодня, 23:00"} status={"В обработке"} totalPrice={350.99} />
            </ComponentPreview>
            <ComponentPreview path="/OrderOutlet">
                <OrderOutlet/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;