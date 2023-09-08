import React, { useRef, useState } from 'react';
import { useNavigate ,Link } from 'react-router-dom';
import { S3_BUCKET } from '../../../utils/Constants';
import styles from "./HomeVideo.module.scss";

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
            <video onEnded={() => { navigate("/navigator") }} playsInline ref={vidRef}>

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
                            <Link target="_blank" rel="noopener noreferrer" to="https://drive.google.com/file/d/1ajamewqmu4OmSuH4AkC6qyGQcUrxov0O/view">
                                    Satyug Whitepaper
                                </Link>
                            </li>
                            <li>
                            <Link target="_blank" rel="noopener noreferrer" to="https://drive.google.com/file/d/1ct1NoGnshhZyKzGwRNzRzT85uQ_ERSuE/view">Satyug Pitch Deck</Link>
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
                // <Button
                //     className={styles.skip_btn}
                //     onClick={() => navigate('/navigator')}
                //     text={<>Skip <RightArrows /></>}
                // />
                <button
                    className={styles.skip_btn}
                    onClick={() => navigate("/navigator")}>
                    Skip
                </button>
            }
        </section>
    )
}

export default HomeVideo
