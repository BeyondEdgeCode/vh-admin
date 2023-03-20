import { Routes, Route } from "react-router-dom"
import {Layout} from "../layout/layout";
import {Login} from "../login/login";
export const RouterComponents = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="login" element={<Login/>}/>
                    <Route path="orders" element={<b>Хуй</b>} />
                </Route>
                <Route path="*" element={<Layout/>}/>
            </Routes>
        </>
    )
}