import React from 'react'
import jaiShriRam from "../../../assets/animations/jai-shri-ram.json";
import styles from "./Games.module.scss";
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import GameCard from '../../common/Cards/GameCard/GameCard';
import gameImage1 from "../../../assets/images/game-card1.png";
import gameImage2 from "../../../assets/images/game-card2.png";
import gameImage3 from "../../../assets/images/game-card3.png";
import gameImage4 from "../../../assets/images/game-card4.png";
import gameImage5 from "../../../assets/images/game-card5.png";
import LottieAnimation from '../../common/LottieAnimation/LottieAnimation';
import HeadingText from '../../common/HeadingText/HeadingText';
import Backbutton from '../../common/Backbutton/Backbutton';
const Games = () => {
    const settings = {
        dots: false,
        arrows: false,
        slidesToShow: 5,
        infinite: false,
       
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
                    // slidesToScroll={slideToScroll}
                    // onSwipe={direction => {
                    //     if (direction === "left") {
                    //         // console.log(document.querySelector(".slick-current").getAttribute(`data-index`) === document.querySelector(".games_slider .slick-list .slick-track").children.length - 5)
                    //         if (document.querySelector(".slick-current").getAttribute(`data-index`) == document.querySelector(".games_slider .slick-list .slick-track").children.length - 6) {
                    //             setSlideToScroll(false);
                    //         }
                    //     } else {
                    //         setSlideToScroll(true);
                    //     }
                    // }}
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
