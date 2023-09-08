import React from 'react'
import { Modal } from 'react-bootstrap'
import { S3_BUCKET } from '../../../../utils/Constants';
import styles from "./GamePlayVideo.module.scss";
import { CoinIcons, CrossIcon } from '../../../../assets/svg/svgicons';

const GamePlayVideo = ({ show, handleClose }) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            size='xl'
            className={styles.gamplay_modal}
            centered
        >
            <button><CrossIcon /></button>
            <button className={styles.donate_btn}><CoinIcons /> Donate</button>
            <video
                autoPlay
            >
                <source src={`${S3_BUCKET.VIDEOS}/SatyugHome.mp4`} type="video/mp4" />
            </video>
        </Modal>
    )
}

export default GamePlayVideo
