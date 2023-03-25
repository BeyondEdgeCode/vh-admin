import { Route, Routes } from 'react-router-dom';
import { Category } from '../category/category';
import { LayoutContainer } from '../layout/layout.container';
// import { Layout } from '../layout/layout';
import { Login } from '../login/login';
import { Logout } from '../logout/logout';
import { Products } from '../products/products';
export const RouterComponents = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutContainer />}>
                    <Route path="login" element={<Login />} />
                    <Route path="logout" element={<Logout />} />
                    <Route path="orders" element={<b>Хуй</b>} />
                    <Route path="products" element={<Products />}>
                        <Route path="storage" element={<b>Хуй</b>} />
                        <Route path="list" element={<b>Хуй</b>} />
                        <Route path="categories" element={<Category />} />
                        <Route path="subcategories" element={<b>Хуй</b>} />
                    </Route>
                </Route>

                {/*Роуты продуктов*/}
                {/* Прочие */}
                <Route path="*" element={<LayoutContainer />} />
            </Routes>
        </>
    );
};
