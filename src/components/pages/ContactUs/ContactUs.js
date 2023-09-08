import React from 'react'
import styles from "./ContactUs.module.scss";
import ContentLayout from '../../layouts/ContentLayout/ContentLayout';
import { S3_BUCKET } from '../../../utils/Constants';
import HeadingText from '../../common/HeadingText/HeadingText';
import LottieAnimation from '../../common/LottieAnimation/LottieAnimation';
import animation from "../../../assets/animations/fuljhadia.json";
import { Form, Formik } from 'formik';
import FormControl from '../../common/Formik/FormControl';
import SecondaryBtn from '../../common/Buttons/SecondaryBtn/SecondaryBtn';
import mailIcon from "../../../assets/images/mail-icon.png";
import phoneIcon from "../../../assets/images/phone-icon.png";
import locationIcon from "../../../assets/images/location-icon.png";
import { Col, Container, Row } from 'react-bootstrap';

const ContactUs = () => {
    const initialValues = {
        fname: "",
        lname: "",
        email: "",
        message: "",
    };
    const handleSubmit = (values, onSubmitProps) => {
        setTimeout(() => {
            onSubmitProps.setSubmitting(false);
        }, 1000)
    };
    return (
        <section className={styles.contact_us}>
            <Container>
                <img src={`${S3_BUCKET.IMAGES}/archery.png`} alt="archery-icon" className={styles.archery_icon} />
                <HeadingText
                    heading="Contact Us"
                    className={styles.heading}
                />
                <LottieAnimation
                    animation={animation}
                    className={styles.animation}
                />
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                >
                    {
                        formik => {
                            return (
                                <Form>
                                    <Row>
                                        <Col md={6}>
                                            <Row>
                                                <Col md={12}>
                                                    <FormControl
                                                        className={styles.input}
                                                        name="fname"
                                                        formik={formik}
                                                        label="First Name :"
                                                    />
                                                </Col>
                                                <Col md={12}>
                                                    <FormControl
                                                        className={styles.input}
                                                        name="lname"
                                                        formik={formik}
                                                        label="Last Name :"
                                                    />
                                                </Col>
                                                <Col md={12}>
                                                    <FormControl
                                                        className={styles.input}
                                                        name="email"
                                                        formik={formik}
                                                        type="email"
                                                        label="Email :"
                                                    />
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col md={6}>
                                            <FormControl
                                                className={styles.input}
                                                name="message"
                                                formik={formik}
                                                as="textarea"
                                                label="Message :"
                                            />
                                        </Col>
                                    </Row>
                                    <SecondaryBtn
                                        text="Submit"
                                        type="submit"
                                        disabled={formik.isSubmitting}
                                    />
                                </Form>
                            )
                        }
                    }
                </Formik>
                <ul className={styles.social_details}>
                    <li>
                        <a
                            href="mail:suveett.kalra@satyug.life"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={mailIcon} alt="mail-icon" />suveett.kalra@satyug.life
                        </a>
                    </li>
                    <li>
                        <a href="tel:+919810187088" target="_blank" rel="noreferrer noopener">
                            <img src={phoneIcon} alt="phone-icon" />+919810187088
                        </a>
                    </li>
                    <li>
                        <a href="/" target="_blank" rel="noreferrer noopener">
                            <img src={locationIcon} alt="location-icon" /> D 193, Lajpat Nagar 1,
                            New Delhi- 110024</a>
                    </li>

                </ul>
            </Container>
        </section>
    )
}

export default ContactUs
