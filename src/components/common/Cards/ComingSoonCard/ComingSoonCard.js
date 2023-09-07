import React from 'react'
import styles from "../GameCard/GameCard.module.scss";
import comingSoon from "../../../../assets/images/coming-soon-game.png";
import archeryIcon from "../../../../assets/images/game-archery-1.png";
import comingSoonStyles from "./ComingSoonCard.module.scss";
import lockImage from "../../../../assets/images/lockedgame.png";
import Button from '../../Buttons/Button/Button';

const ComingSoonCard = ({ gameImage, lockedCard, className, gameTitle }) => {
    return (
        <div className={`${styles.game_card} ${styles.coming_soon} ${className || ""}`}>
            <div className={styles.game_inner}>
                <span className={styles.archery_icon}><img src={archeryIcon} alt="archery-icon" /></span>
                <div className={styles.game_image}>
                    <img src={gameImage} alt="game" />
                </div>
                <div className={styles.game_title}>
                    <h2>{gameTitle}</h2>

                    {
                        lockedCard ?
                            <img className={comingSoonStyles.locked_image} src={lockImage} alt='locked-card' />
                            :
                            <img className={comingSoonStyles.coming__soon} src={comingSoon} alt="coming-soon" />
                    }
                </div>
                {
                    lockedCard &&
                    <Button
                        className={styles.action_btn}
                        text="Watch Video"
                        variant="secondary-btn"
                    />
                }
            </div>
        </div>
    )
}

export default ComingSoonCard
