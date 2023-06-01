import Popup from "reactjs-popup";
import css from './popup.module.css';
import React from "react";

type TPopup = {
    title: string
    isOpen: boolean
    setOpen: React.Dispatch<boolean>
    content?: any
    closeOnClick?: boolean
}
export const UniversalPopup = ({isOpen, setOpen, content, title, closeOnClick}: TPopup) => {
    return (
    <Popup
        open={isOpen}
        onClose={()=>{setOpen(false)}}
        modal
        position="top center"
        closeOnDocumentClick={closeOnClick === true}
    >
        <div className={css.root}>
            <div className={css.modalHeader}>
                <h3 className={css.h3}>{title}</h3>
                <span className={css.times} onClick={()=>setOpen(false)}>&times;</span>
            </div>
            {content}
        </div>
    </Popup>)
};