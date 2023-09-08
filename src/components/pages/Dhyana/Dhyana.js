import React from 'react';
import styles from "./Dhyana.module.scss";
import VideoLayout from '../../layouts/VideoLayout/VideoLayout';
import { S3_BUCKET } from '../../../utils/Constants';
const dhyanaVideo = `${S3_BUCKET.VIDEOS}/dhyana.mp4`

const Dhyana = () => {
    return (
        <VideoLayout
            video={dhyanaVideo}
            className={styles.yoga}
        />
    )
}

export default Dhyana
