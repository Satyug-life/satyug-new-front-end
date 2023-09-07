import React, { useState } from 'react';
import styles from "./DonationModal.module.scss";
import { Modal } from 'react-bootstrap';
import { CoinIcons, CrossIcon } from '../../../../assets/svg/svgicons';
import { Form, Formik } from 'formik';
import Input from '../../Formik/Input/Input';
import Button from '../../Buttons/Button/Button';

const DonationModal = ({ show, handleClose }) => {
    const [active, setActive] = useState(null);
    const initialValues = {
        amount: active,
        emailId: "",
    }
    const handleSubmit = values => {
        console.log(values);
    }
    const amountButtons = [
        {
            value: 50,
            label: 50,
        },
        {
            value: 100,
            label: 100,
        },
        {
            value: 500,
            label: 500,
        },
    ];
    return (
        <Modal
            show={show}
            className={styles.donation_modal}
            onHide={handleClose}
            centered
        >
            <Modal.Header>
                <button onClick={handleClose} className={styles.close_btn}><CrossIcon /></button>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                >
                    {
                        formik => {
                            return (
                                <Form>
                                    <Input
                                        label="Enter Email ID:"
                                        placeholder="example  @email.com"
                                        formik={formik}
                                        name="emailId"
                                        className={`${styles.input} ${styles.emailId}`}
                                    />
                                    <Input
                                        label="Enter Amount to Donate:"
                                        className={styles.input}
                                        placeholder="$45.00"
                                        formik={formik}
                                        name='amount'
                                    />
                                    <ul>
                                        {
                                            amountButtons.map(item => (
                                                <li key={item.value}>
                                                    <button
                                                        onClick={() => { setActive(item.value); formik.setFieldValue("amount", item.value) }}
                                                        className={active === item.value ? styles.active : ""}
                                                    >
                                                        <CoinIcons />{item.label}
                                                    </button>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <Button
                                            text="Proceed"
                                            type="submit"
                                            className={styles.proceed_btn}
                                        />
                                    </div>
                                </Form>
                            )
                        }
                    }
                </Formik>
            </Modal.Body>

        </Modal>
    )
}

export default DonationModal
