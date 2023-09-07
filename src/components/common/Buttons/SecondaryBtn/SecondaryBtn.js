import React from 'react';
import styles from "./SecondaryBtn.module.scss";
import leftArrow from "../../../../assets/svg/left-arrow.svg";
import rightArrow from "../../../../assets/svg/right-arrow.svg";
const SecondaryBtn = ({ className, onClick, type, text, ...rest }) => {
    return (
        <button
            {...rest}
            onClick={onClick}
            type={type || "button"}
            className={`${styles.button} ${className || ""}`}
        >
            <img src={leftArrow} alt='left-arrow' />
            <span>{text}</span>
            <img src={rightArrow} alt='right-arrow' />
        </button>
    )
}

export default SecondaryBtn
