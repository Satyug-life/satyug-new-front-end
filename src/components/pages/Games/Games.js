import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import jaiShriRam from "../../../assets/animations/jai-shri-ram.json";
import gameImage1 from "../../../assets/images/game-card1.png";
import gameImage2 from "../../../assets/images/game-card2.png";
import gameImage3 from "../../../assets/images/game-card3.png";
import gameImage4 from "../../../assets/images/game-card4.png";
import gameImage5 from "../../../assets/images/game-card5.png";
import Backbutton from '../../common/Backbutton/Backbutton';
import GameCard from '../../common/Cards/GameCard/GameCard';
import HeadingText from '../../common/HeadingText/HeadingText';
import LottieAnimation from '../../common/LottieAnimation/LottieAnimation';
import styles from "./Games.module.scss";
const Games = () => {
    const settings = {
        dots: false,
        arrows: false,
        slidesToShow: 5,
        infinite: false,
        // responsive: [
        //     {
        //         breakpoint: 1439,
        //         settings: {
        //             slidesToShow: 3,
        //         }
        //     }
        // ]
    };
  
    return (
        <section className={styles.games}>
            <Container>
                <Backbutton className={styles.backbtn} />
                <div className={styles.games_inner}>
                    <HeadingText
                        heading="Kriya"
                        className={styles.games_logo}
                    />
                    <LottieAnimation
                        animation={jaiShriRam}
                        className={styles.animation}
                    />
                    <Slider
                        className="games_slider"
                        {...settings}
                   
                    >
                        <GameCard
                            gameTitle={"Vanner Sena Battle KUMBHKARAN"}
                            comingSoon={true}
                            gameImage={gameImage1}
                        />
                        <GameCard
                            gameTitle={"Ravan at the LAXMAN REKHA"}
                            comingSoon={true}
                            gameImage={gameImage2}
                        />
                        <GameCard
                            gameTitle={"RAM MANDIR ka Nirman"}
                            gameImage={gameImage3}
                          
                        />
                        <GameCard
                            gameTitle={"Search for SANJIVANI BOOTI"}
                            comingSoon={true}
                            gameImage={gameImage4}
                        />
                        <GameCard
                            gameTitle={"RAM SENA Battles RAVAN"}
                            comingSoon={true}
                            gameImage={gameImage5}
                        />
                    </Slider>
                </div>
            </Container>
        </section>
    )
}

export default Games
