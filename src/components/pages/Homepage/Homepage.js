import React from 'react';
import styles from "./Homepage.module.scss";
import logo from "../../../assets/images/logo-hd.png";
import { Container } from 'react-bootstrap';
import Button from '../../common/Buttons/Button/Button';
import darshanImg from "../../../assets/images/darshan.png";
import yogImg from "../../../assets/images/yog.png";

const Homepage = () => {
    return (
        <section className={styles.homepage}>
            <Container>
                <div className={styles.home_inner}>
                    <img className={styles.logo} src={logo} alt="logo" />
                    <div className={styles.home_content}>
                        <div className={styles.home_box}>
                            <img src={darshanImg} alt="mandir" />
                            <Button
                                text="Kriya"
                            />
                        </div>
                        <div className={styles.home_box}>
                            <img src={yogImg} alt="mandir" />
                            <Button
                                text="Dhyana"
                            />
                        </div>
                        <div className={styles.home_box}>
                            <img src={yogImg} alt="mandir" />
                            <Button
                                text="Yog"
                            />
                        </div>
                        <div className={styles.home_box}>
                            <img src={darshanImg} alt="mandir" />
                            <Button
                                text="Darshan"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Homepage
