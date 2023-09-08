import React, { useEffect, useRef } from "react";
import styles from "./Login.module.scss";
import { Form, Formik } from "formik";
import FormControl from "../../common/Formik/FormControl";
import SecondaryBtn from "../../common/Buttons/SecondaryBtn/SecondaryBtn";
import { useNavigate } from "react-router-dom";
import HeadingText from "../../common/HeadingText/HeadingText";
import LottieAnimation from "../../common/LottieAnimation/LottieAnimation";
import animation from "../../../assets/animations/fuljhadia.json";
import ContentLayout from "../../layouts/ContentLayout/ContentLayout";
import * as Yup from "yup";
import {
  FORMIK_REGEX,
  S3_BUCKET,
  S3_BUCKET_AUDIO,
} from "../../../utils/Constants";
import { apiCallPost } from "../../../axiosApi/Axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserId,
  setUserReferKey,
} from "../../../redux/userDetails/userSlice";

const Login = () => {
  const initialValues = {
    name: "",
    whatsapp: "",
    emailId: "",
  };
  const userDetails = useSelector((state) => state.userDetails);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const audioRef = useRef();

  useEffect(() => {
    audioRef?.current && audioRef.current.play();
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioRef?.current]);

  const onSubmit = async (values) => {
    let data = {
      name: values.name,
      phoneNumber: values.whatsapp,
      email: values.emailId,
      collectiveId: userDetails.collectiveId,
      token: userDetails.token,
    };

    try {
      let response = await apiCallPost(
        "/api/v1/satyug/users/collective",
        data,
        {},
        true,
        true
      );

      if (response.status === 200) {
        dispatch(setUserId(response.data.userId));
        dispatch(setUserReferKey(response.data.userKey));
        navigate("/question");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .max(
        40,
        "Name must be between 2-40 characters, only alphabets are allowed."
      )
      .min(
        2,
        "Name must be between 2-40 characters, only alphabets are allowed."
      )
      .matches(FORMIK_REGEX.ALPHA_REGEX, "Only alphabets are allowed."),
    whatsapp: Yup.string()
      .required("WhatsApp number is required")
      .matches(FORMIK_REGEX.MOBILE_NUMBER_REGEX, "Enter valid WhatsApp number"),
    emailId: Yup.string()
      .required("Email is required")
      .matches(FORMIK_REGEX.EMAIL_REGEX, "Enter valid email address"),
  });

  return (
    <>
      <ContentLayout className={styles.login_page}>
        <img
          data-aos="fade-up"
          className={styles.archery_icon}
          src={`${S3_BUCKET.IMAGES}/archery.png`}
          alt="archery"
        />
        <HeadingText heading="Satyug" className={styles.logo} />
        <LottieAnimation className={styles.animation} animation={animation} />
        <audio ref={audioRef} loop>
          <source src={S3_BUCKET_AUDIO.AFTER_GAME} type="audio/mpeg" />
        </audio>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <FormControl
                  className={styles.input}
                  label="Name :"
                  formik={formik}
                  name="name"
                  placeholder="Enter Your Name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                <FormControl
                  label="WhatsApp :"
                  className={styles.input}
                  name="whatsapp"
                  formik={formik}
                  placeholder="1234567890"
                  type="text"
                  onChange={formik.handleChange}
                  maxLength={10}
                  onBlur={formik.handleBlur}
                  value={formik.values.whatsapp}
                />
                <FormControl
                  className={styles.input}
                  type="email"
                  placeholder="Example@email.com"
                  label="Email ID :"
                  name="emailId"
                  formik={formik}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.emailId}
                />
                <SecondaryBtn type="submit" text="Submit" />
              </Form>
            );
          }}
        </Formik>
      </ContentLayout>
    </>
  );
};

export default Login;
