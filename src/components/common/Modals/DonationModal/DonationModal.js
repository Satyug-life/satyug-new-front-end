import React, { useState, useCallback } from "react";
import styles from "./DonationModal.module.scss";
import { Modal } from "react-bootstrap";
import { CoinIcons, CrossIcon } from "../../../../assets/svg/svgicons";
import { Form, Formik } from "formik";
import Input from "../../Formik/Input/Input";
import Button from "../../Buttons/Button/Button";
import * as Yup from "yup";
import { ENVIRONMENT, FORMIK_REGEX } from "../../../../utils/Constants";
import useRazorpay from "react-razorpay";
import { apiCallPost } from "../../../../axiosApi/Axios";
import { toasts } from "../../Toast/Toast";

const DonationModal = ({ show, handleClose }) => {
  const [active, setActive] = useState(null);
  const [Razorpay, isLoaded] = useRazorpay();
  const handlePayment = useCallback(
    async (orderId) => {

      const options = {
        key: ENVIRONMENT.RAZORPAY_KEY,
        order_id: orderId,
        handler: (res) => {
          console.log(res);
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzpay = new Razorpay(options);
      rzpay.open();
    },
    [Razorpay]
  );
  const initialValues = {
    amount: 0,
    emailId: "",
  };
  const handleSubmit = async (values) => {
    try {
      const response = await apiCallPost("/razorPay/v1/payment/order", {
        amount: values.amount,
        currency: "INR",
        receipt: values.emailId,
      });
      if (response.status === 200) {
        if (isLoaded) {
          handlePayment(response.data.orderId);
        } else {
          toasts.error("Something went wrong");
        }
      } else {
        toasts.error("Something went wrong");
      }
    } catch (err) {}
  };
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
  const validationSchema = Yup.object().shape({
    emailId: Yup.string()
      .required("Email is required")
      .matches(FORMIK_REGEX.EMAIL_REGEX, "Invalid email"),
    amount: Yup.number().required("Amount is required").min(1),
  });
  return (
    <Modal
      show={show}
      className={styles.donation_modal}
      onHide={handleClose}
      centered
    >
      <Modal.Header>
        <button onClick={handleClose} className={styles.close_btn}>
          <CrossIcon />
        </button>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => {
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
                  placeholder="Rs.45.00"
                  formik={formik}
                  name="amount"
                  type="number"
                />
                <ul>
                  {amountButtons.map((item) => (
                    <li key={item.value}>
                      <button
                        type="button"
                        onClick={() => {
                          setActive(item.value);
                          formik.setFieldValue("amount", item.value);
                        }}
                        className={active === item.value ? styles.active : ""}
                      >
                        <CoinIcons />
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="d-flex align-items-center justify-content-center">
                  <Button
                    text="Proceed"
                    type="submit"
                    className={styles.proceed_btn}
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default DonationModal;

