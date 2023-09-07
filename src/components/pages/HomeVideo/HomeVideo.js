import React, { useRef, useState } from 'react'
import logo from "../../../assets/images/logo-hd.png";
import styles from "./HomeVideo.module.scss";
import homeVideo from "../../../assets/videos/home-video.mp4";
import { RightArrows } from '../../../assets/svg/svgicons';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Buttons/Button/Button';

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
            <video ref={vidRef}>
                <source src={homeVideo} type="video/mp4" />
            </video>
            {
                !playing
                &&
                <div className={styles.home_content}>
                    <button onClick={handlePlayVideo}>Click to Enter</button>
                    <img src={logo} alt="logo" />
                    <button onClick={() => navigate("/about-us")}>About Us</button>
                </div>
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
