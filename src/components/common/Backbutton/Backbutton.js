import React from 'react'
import styles from "./Backbutton.module.scss";
import backIcon from "../../../assets/images/back-icon.png";
import { useNavigate } from 'react-router-dom';

const Backbutton = ({ children, className }) => {
    const navigate = useNavigate();
    return (
        <div className={`${styles.back_wrap} ${className || ""}`}>
            <button onClick={() => navigate(-1)} className={styles.back_btn}>
                <img src={backIcon} alt="back" />
                Back
            </button>
            {
                children
            }
        </div>
    )
}

export default Backbutton
