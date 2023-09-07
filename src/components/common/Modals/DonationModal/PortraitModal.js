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

const PortraitModal = ({ show, handleClose }) => {
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
        <p style={{ color: "white", fontSize: "45px" }}>
          for Better expierence switch to landscape mode
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default PortraitModal;
