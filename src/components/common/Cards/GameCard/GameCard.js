import React from 'react'
import archeryIcon from "../../../../assets/images/game-archery-1.png";
import archeryIcon2 from "../../../../assets/images/game-archery-2.png";
import styles from "./GameCard.module.scss";
import leftArrow from "../../../../assets/images/game-left-arrow.png";
import rightArrow from "../../../../assets/images/game-right-arrow.png";
import Button from '../../Buttons/Button/Button';

const GameCard = ({ playCard, gameImage, gameTitle, comingSoon, className }) => {
    return (
        <div className={`${styles.game_card} ${className || ""} ${comingSoon ? styles.coming_soon : ""}`}>
            <div className={styles.game_inner}>
                {
                    !comingSoon &&
                    <>
                        <span className={styles.left_arrow}><img src={leftArrow} alt="" /></span>
                        <span className={styles.right_arrow}><img src={rightArrow} alt="" /></span>
                    </>
                }
                <span className={styles.archery_icon}><img src={comingSoon ? archeryIcon : archeryIcon2} alt="archery-icon" /></span>
                <div className={styles.game_image}>
                    <img src={gameImage} alt="game" />
                </div>
                <div className={styles.game_title}>
                    <h2>{gameTitle}</h2>
                </div>
                {
                    comingSoon ?
                        null
                        :
                        playCard ?
                            <Button
                                text="Play for Free"
                                variant="secondary-btn"
                                className={styles.action_btn}
                            />
                            :
                            <Button
                                text="Play Now"
                                className={styles.action_btn}
                            />
                }
            </div>
        </div>
    )
}

export default GameCard
