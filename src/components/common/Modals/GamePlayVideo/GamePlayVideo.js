import React from 'react';
import { Modal } from 'react-bootstrap';
import { CrossIcon } from '../../../../assets/svg/svgicons';
import { S3_BUCKET } from '../../../../utils/Constants';
import styles from "./GamePlayVideo.module.scss";
// import DonationModal from '../DonationModal/DonationModal';

const GamePlayVideo = ({ show, handleClose ,gamePlay}) => {
    // const [donationModal, setShowDonation] = useState(false);
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size='xl'
                className={styles.gamplay_modal}
                centered
            >
                {/* <button onClick={handleClose} className={styles.crossIcon}><CrossIcon /></button> */}
                {/* <button onClick={() => { handleClose(); setShowDonation(true) }} className={styles.donate_btn}><CoinIcons /> Donate</button> */}
                <video
                    autoPlay
                    onEnded={gamePlay}
                >
                    <source src={S3_BUCKET.BEFORE_GAME} type="video/mp4" />
                </video>
            </Modal>
            {/* <DonationModal
                show={donationModal}
                handleClose={() => setShowDonation(false)}
            /> */}
        </>
    )
}

export default GamePlayVideo
