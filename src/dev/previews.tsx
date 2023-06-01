import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import {Orders} from "../components/orders/Orders";
import {Order} from "../components/ui-kit/containers/orders/Order/Order";
import {OrderOutlet} from "../components/orders/order-outlet/OrderOutlet";
import {ImageCarousel} from "../components/settings/imagecarousel/ImageCarousel";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ImageCarousel">
                <ImageCarousel/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;