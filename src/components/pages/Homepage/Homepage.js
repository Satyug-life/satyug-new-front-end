import React from 'react';
import animation from "../../../assets/animations/particles.json"
import styles from "./Homepage.module.scss";
import logo from "../../../assets/images/logo-hd.png";
import { Container } from 'react-bootstrap';
import Button from '../../common/Buttons/Button/Button';
import darshanImg from "../../../assets/images/darshan.png";
import yogImg from "../../../assets/images/yog.png";
import LottieAnimation from '../../common/LottieAnimation/LottieAnimation';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();
    return (
        <section className={styles.homepage}>
            <Container>
                <div className={styles.home_inner}>
                    <img className={styles.logo} src={logo} alt="logo" />
                    <div className={styles.home_content}>
                        <div className={styles.home_box}>
                            <img
                                src={darshanImg}
                                alt="mandir"
                            />
                            <LottieAnimation
                                animation={animation}
                                className={styles.animation}
                            />
                            <Button
                                onClick={() => navigate('/games')}
                                text="Kriya"
                            />
                        </div>
                        <div className={styles.home_box}>
                            <img src={yogImg} alt="mandir" />
                            <LottieAnimation
                                animation={animation}
                                className={styles.animation}
                            />
                            <Button
                                // onClick={() => navigate('/games')}
                                text="Dhyana"
                            />
                        </div>
                        <div className={styles.home_box}>
                            <img src={yogImg} alt="mandir" />
                            <LottieAnimation
                                animation={animation}
                                className={styles.animation}
                            />
                            <Button
                                // onClick={() => navigate('/games')}
                                text="Yog"
                            />
                        </div>
                        <div className={styles.home_box}>
                            <img src={darshanImg} alt="mandir" />
                            <LottieAnimation
                                animation={animation}
                                className={styles.animation}
                            />
                            <Button
                                // onClick={() => navigate('/games')}
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
