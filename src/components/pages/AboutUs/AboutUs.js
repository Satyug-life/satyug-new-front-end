import React from 'react';
import styles from "./AboutUs.module.scss";
import aboutVideo from "../../../assets/videos/about-us-video.mp4";
import PageHeading from '../../common/PageHeading/PageHeading';
import { Container } from 'react-bootstrap';
import { DiscordIcon, GithubIcon, RedditIcon, TelegramIcon, TwitterIcon } from '../../../assets/svg/svgicons';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <section className={styles.about_us}>
            <video autoPlay className={styles.about_video} muted>
                <source src={aboutVideo} type="video/mp4" />
            </video>
            <Container>
                <div className={styles.about_content}>
                    <PageHeading
                        heading='Sat in Sanskrit stands for " Right and Truthful" and Yug stands for "Period of Time"'
                        className={styles.heading}
                    />
                    <ul className={styles.about_list}>
                        <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                            <strong>Ram Setu  - </strong>
                            Invoke human consciousness through the power of memes
                        </li>
                        <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                            <strong>Dhyana - </strong>  Get Paid for doing Nothing at all
                        </li>
                        <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-offset="-100">
                            <strong>Darshan  - </strong> Virtual Religious Tourism in VR.
                        </li>
                        <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-offset="-100">
                            <strong>Kriya  - </strong> A Mythological game based in the year 3198 BC, set by Alien-Gods
                        </li>
                        <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="-100">
                            <strong>Yoga  - </strong> Perform Yoga. We pay you for that.
                        </li>
                    </ul>
                    <footer>
                        <ul className={styles.footer_links}>
                            <li>
                                <Link to="">Satyug Whitepaper</Link>
                            </li>
                            <li>
                                <Link to="">Satyug Pitch Deck</Link>
                            </li>
                            <li>
                                <Link to="">Presentation</Link>
                            </li>
                            <li>
                                <Link to="">VR Presentation</Link>
                            </li>
                            <li>
                                <Link to="">Contact-Us</Link>
                            </li>
                            <li>
                                <Link to="">Roadmap</Link>
                            </li>
                            <li>
                                <Link to="">Tokenomics</Link>
                            </li>
                        </ul>
                        <div className={styles.footer_details}>
                            <p className={styles.copy_right}>
                                Satyug © 2022 Company, Inc
                            </p>
                            <ul className={styles.footer_social}>
                                <li>
                                    <a href="/" target="_blank" rel="noreferrer">
                                        <TwitterIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="/" target="_blank" rel="noreferrer">
                                        <GithubIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="/" target="_blank" rel="noreferrer">
                                        <DiscordIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="/" target="_blank" rel="noreferrer">
                                        <RedditIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="/" target="_blank" rel="noreferrer">
                                        <TelegramIcon />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </Container>
        </section>
    )
}

export default AboutUs
