import React from 'react';
import styles from "./Input.module.scss";
import { ErrorMessage, Field } from 'formik';
import ErrorMsg from '../ErrorMsg/ErrorMsg';

const Input = ({ name, formik, error, label, className, ...rest }) => {
    return (
        <div className={`${styles.input} ${className || ""}`}>
            {
                label &&
                <label htmlFor={name}>{label}</label>
            }
            <div className={styles.input_inner}>
                <Field
                    {...rest}
                    id={name}
                    name={name}
                />
            </div>
            <ErrorMessage name={name} component={ErrorMsg} />
        </div>
    );
};

export default Input;
