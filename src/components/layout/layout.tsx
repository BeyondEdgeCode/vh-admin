import { Outlet } from 'react-router-dom';
import { Navbar } from '../navbar/navbar';
import css from './layout.module.css';

export const Layout = () => {
    return (
        <div className={css.layout}>
            <Navbar />
            <Outlet />
        </div>
    );
};
