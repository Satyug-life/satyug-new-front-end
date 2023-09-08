import React from 'react';
import VideoLayout from '../../layouts/VideoLayout/VideoLayout';
import styles from "./Yoga.module.scss";
import { S3_BUCKET } from '../../../utils/Constants';

const Yoga = () => {
    return (
        <VideoLayout
            video={`${S3_BUCKET.VIDEOS}/yoga.mp4`}
            className={styles.yoga}
        />
    )
}

export default Yoga
