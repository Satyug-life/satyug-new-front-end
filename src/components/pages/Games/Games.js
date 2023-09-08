import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import jaiShriRam from "../../../assets/animations/jai-shri-ram.json";
import { S3_BUCKET } from '../../../utils/Constants';
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
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 389,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 349,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <section className={styles.games}>
            <Container>
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
                            dataAos={{
                                "data-aos": "fade-up",
                                "data-aos-delay": "400"
                            }}
                            gameTitle={"Vanner Sena Battle KUMBHKARAN"}
                            comingSoon={true}
                            gameImage={`${S3_BUCKET.IMAGES}/game-card1.png`}
                        />
                        <GameCard
                            dataAos={{
                                "data-aos": "fade-up",
                                "data-aos-delay": "100"
                            }}
                            gameTitle={"Ravan at the LAXMAN REKHA"}
                            comingSoon={true}
                            gameImage={`${S3_BUCKET.IMAGES}/game-card2.png`}
                        />
                        <GameCard
                            dataAos={{
                                "data-aos": "fade-up",
                                "data-aos-delay": "200"
                            }}
                            gameTitle={"RAM MANDIR ka Nirman"}
                            gameImage={`${S3_BUCKET.IMAGES}/game-card3.png`}
                        />
                        <GameCard
                            dataAos={{
                                "data-aos": "fade-up",
                                "data-aos-delay": "300"
                            }}
                            gameTitle={"Search for SANJIVANI BOOTI"}
                            comingSoon={true}
                            gameImage={`${S3_BUCKET.IMAGES}/game-card4.png`}
                        />
                        <GameCard
                            dataAos={{
                                "data-aos": "fade-up",
                                "data-aos-delay": "500"
                            }}
                            gameTitle={"RAM SENA Battles RAVAN"}
                            comingSoon={true}
                            gameImage={`${S3_BUCKET.IMAGES}/game-card5.png`}
                        />
                    </Slider>
                </div>
            </Container>
        </section>
    )
}

export default Games
