import React, { useRef, useState } from 'react'
import styles from "./HomeVideo.module.scss";
import { RightArrows } from '../../../assets/svg/svgicons';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Buttons/Button/Button';
import { S3_BUCKET } from '../../../utils/Constants';

const HomeVideo = () => {

    const [playing, setPlaying] = useState(false);
    const vidRef = useRef(null);
    const navigate = useNavigate();

    const handlePlayVideo = () => {
        vidRef.current.play()
        setPlaying(true);
    }
    return (
        <section className={styles.home_video}>
            <video   onEnded={()=>{navigate("/navigator")}} playsInline  ref={vidRef}>
            
                <source src={`${S3_BUCKET.VIDEOS}/SatyugHome.mp4`} type="video/mp4" />
            </video>
            {
                !playing
                &&
                <>
                    <div className={styles.home_content}>
                        <button onClick={handlePlayVideo}>Click to Enter</button>
                        <img data-aos="zoom-in" data-aos-duration="800" data-aos-offset="-500" src={`${S3_BUCKET.IMAGES}/logo-hd.png`} alt="logo" />
                        <button onClick={() => navigate("/about-us")}>About Us</button>
                    </div>
                    <div className={styles.home_footer}>
                        <h3>Satyug</h3>
                        <ul>
                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    Satyug Whitepaper
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    Satyug Pitch Deck
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    Satyug Description
                                </a>
                            </li>
                        </ul>
                    </div>
                </>
            }
            {
                playing &&
                // <button className={styles.skip_btn} onClick={() => navigate('/navigator')}>Skip <RightArrows /></button>
                <Button
                    className={styles.skip_btn}
                    onClick={() => navigate('/navigator')}
                    text={<>Skip <RightArrows /></>}
                />
            }
        </section>
    )
}

export default HomeVideo
