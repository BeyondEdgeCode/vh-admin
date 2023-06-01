import { Route, Routes } from 'react-router-dom';
import { Category } from '../category/category';
import { LayoutContainer } from '../layout/layout.container';
// import { Layout } from '../layout/layout';
import { Login } from '../login/login';
import { Logout } from '../logout/logout';
import { Products } from '../products/products';
import {Orders} from "../orders/Orders";
import {OrderOutlet} from "../orders/order-outlet/OrderOutlet";
import {OrderEmpty} from "../orders/order-outlet/OrderEmpty";
import {Settings} from "../settings/Settings";
import {ObjectStorage} from "../settings/objectstorage/ObjectStorage";
import {ImageCarousel} from "../settings/imagecarousel/ImageCarousel";
export const RouterComponents = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutContainer />}>
                    <Route path="login" element={<Login />} />
                    <Route path="logout" element={<Logout />} />
                    <Route path="orders" element={<Orders />}>
                        <Route path=":orderId" element={<OrderOutlet/>}/>
                        <Route path="" element={<OrderEmpty/>}/>
                    </Route>
                    <Route path="products" element={<Products />}>
                        <Route path="storage" element={<b>Хуй</b>} />
                        <Route path="list" element={<b>Хуй</b>} />
                        <Route path="categories" element={<Category />} />
                        <Route path="subcategories" element={<b>Хуй</b>} />
                    </Route>
                    <Route path="settings" element={<Settings />}>
                        <Route path="object-storage" element={<ObjectStorage/>} />
                        <Route path="image-carousel" element={<ImageCarousel/>} />
                    </Route>
                </Route>

                {/*Роуты продуктов*/}
                {/* Прочие */}
                <Route path="*" element={<LayoutContainer />} />
            </Routes>
        </>
    );
};
