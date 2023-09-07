import React from 'react'
import styles from "./PageHeading.module.scss";

const PageHeading = ({ className, heading }) => {
    return (
        <div className={`${styles.page_heading} ${className || ""}`}>
            <h2>{heading}</h2>
        </div>
    )
}

export default PageHeading
