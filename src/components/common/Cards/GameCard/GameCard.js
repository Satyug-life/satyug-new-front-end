import React from 'react'
import lockedImg from "../../../../assets/images/lockedgame.png";
import comingsoonImg from "../../../../assets/images/coming-soon-game.png";
import archeryIcon2 from "../../../../assets/images/game-archery-2.png";
import styles from "./GameCard.module.scss";
import leftArrow from "../../../../assets/images/game-left-arrow.png";
import rightArrow from "../../../../assets/images/game-right-arrow.png";
import Button from '../../Buttons/Button/Button';
import { useNavigate } from 'react-router-dom';

const GameCard = ({ playCard, gameImage, gameTitle, comingSoon, lockedCard, className, onPlayClick }) => {
    const navigate = useNavigate()
    return (
        <div className={`${styles.game_card} ${className || ""}`}>
            <div className={styles.game_inner}>
                <span className={styles.left_arrow}><img src={leftArrow} alt="" /></span>
                <span className={styles.right_arrow}><img src={rightArrow} alt="" /></span>
                <span className={styles.archery_icon}><img src={archeryIcon2} alt="archery-icon" /></span>
                <div className={styles.game_image}>
                    <img src={gameImage} alt="game" />
                </div>
                <div className={styles.game_title}>
                    <h2>{gameTitle}</h2>
                    {
                        comingSoon &&
                        <div className={styles.coming_soon_img}>
                            <p>Coming Soon</p>
                            <img src={comingsoonImg} alt="coming-soon" />
                        </div>
                    }
                    {
                        lockedCard &&
                        <div className={`${styles.coming_soon_img} ${styles.locked_img}`}>
                            <img src={lockedImg} alt="lock" />
                        </div>
                    }
                </div>
                {
                    comingSoon ?
                        null
                        :
                        playCard ?
                            <Button
                                // onClick={() => navigate('/login')}
                                text="Play for Free"
                                variant="secondary-btn"
                                className={styles.action_btn}
                                onClick={onPlayClick}
                            />
                            :
                            lockedCard ?
                                <Button
                                    // onClick={() => navigate('/login')}
                                    text="Watch Video"
                                    variant="secondary-btn"
                                    className={styles.action_btn}
                                />
                                :
                                <Button
                                    text="Play Now"
                                    className={styles.action_btn}
                                    onClick={() => navigate("/continue")}
                                />
                }
            </div>
        </div>
    )
}

export default GameCard
