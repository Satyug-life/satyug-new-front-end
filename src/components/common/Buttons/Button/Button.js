import React from 'react';
import styles from "./Button.module.scss";

const Button = ({ className, variant, text, ...rest }) => {
    return (
        <button
            {...rest}
            className={`${styles.button} ${className || ""}`}
            data-variant={variant || ""}
        >
            {text}
        </button>
    )
}

export default Button
