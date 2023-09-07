import React from 'react'
import styles from "./ContentLayout.module.scss";
import { Container } from 'react-bootstrap';
import hanumaanji from "../../../assets/images/hanumaan-ji.png";
import Backbutton from '../../common/Backbutton/Backbutton';

const ContentLayout = ({ children, className, }) => {
    return (
        <section className={`${styles.content_layout} ${className || ""}`}>
            <Container>
                <Backbutton />
                <div className={styles.content_inner}>
                    <div className={styles.content_left}>
                        <div className={styles.content_left_inner}>{children}</div>
                    </div>
                    <div className={styles.content_right}>
                        <img src={hanumaanji} alt="hanuman-ji" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ContentLayout
