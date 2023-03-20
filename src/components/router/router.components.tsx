import { Routes, Route } from "react-router-dom"
import {Layout} from "../layout/layout";
export const RouterComponents = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                     <Route path="orders" element={<b>Хуй</b>} />

                </Route>
                <Route path="*" element={<Layout/>}/>
            </Routes>
        </>
    )
}