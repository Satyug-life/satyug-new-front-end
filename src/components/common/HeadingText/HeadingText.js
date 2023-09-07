import React from 'react';
import leftIcon from "../../../assets/images/heading-left.png";
import rightIcon from "../../../assets/images/heading-right.png";
import styles from "./HeadingText.module.scss";

const HeadingText = ({ heading, className }) => {
    return (
        <div className={`${styles.heading_text} ${className || ""}`}>
            <span><img src={leftIcon} alt="" /></span>
            <h2>{heading}</h2>
            <span>
                <img src={rightIcon} alt="" />
            </span>
        </div>
    )
}

export default HeadingText
