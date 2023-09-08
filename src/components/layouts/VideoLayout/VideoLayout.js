import React from 'react';
import styles from "./VideoLayout.module.scss";
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Buttons/Button/Button';

const VideoLayout = ({ video, className, }) => {
    const navigate = useNavigate();
    return (
        <section className={`${styles.video_layout} ${className || ""}`}>
            <video playsInline
                onEnded={() => navigate("/navigator")}
                autoPlay
            >
                <source src={video} type="video/mp4" />
            </video>
            <Button
                className={styles.back_btn}
                onClick={() => navigate(-1)}
                text={"Back"}
            />
        </section>
    )
}

export default VideoLayout
