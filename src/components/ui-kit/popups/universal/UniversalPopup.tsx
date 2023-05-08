import Popup from "reactjs-popup";
import css from './popup.module.css';
import React from "react";

type TPopup = {
    title: string
    isOpen: boolean
    setOpen: React.Dispatch<boolean>
    content?: any
}
export const UniversalPopup = ({isOpen, setOpen, content, title}: TPopup) => {
    return (
    <Popup open={isOpen} onClose={()=>{setOpen(false)}} modal position="top center">
        <div className={css.root}>
            <div className={css.modalHeader}>
                <h3 className={css.h3}>{title}</h3>
                <span className={css.times} onClick={()=>setOpen(false)}>&times;</span>
            </div>
            {content}
        </div>
    </Popup>)
};