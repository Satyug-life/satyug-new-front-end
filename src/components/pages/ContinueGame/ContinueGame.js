import React from 'react'
import styles from "./ContinueGame.module.scss";
import archeryIcon from "../../../assets/images/archery.png";
import HeadingText from '../../common/HeadingText/HeadingText';
import SecondaryBtn from '../../common/Buttons/SecondaryBtn/SecondaryBtn';
import LottieAnimation from '../../common/LottieAnimation/LottieAnimation';
import animation from "../../../assets/animations/fuljhadia.json";
import ContentLayout from '../../layouts/ContentLayout/ContentLayout';
import { useNavigate } from 'react-router-dom';

const ContinueGame = () => {
    const navigate = useNavigate();
    return (
        <ContentLayout className={styles.continue_game}>
            <img src={archeryIcon} alt="archery-icon" className={styles.archery_icon} />
            <HeadingText
                className={styles.heading}
                heading="Satyug"
            />
            <p>The Age of Righteous and Virtue</p>
            <LottieAnimation
                className={styles.animation}
                animation={animation}
            />
            <SecondaryBtn
                onClick={() => navigate("/participation")}
                text="Continue"
            />
        </ContentLayout>
    )
}

export default ContinueGame
