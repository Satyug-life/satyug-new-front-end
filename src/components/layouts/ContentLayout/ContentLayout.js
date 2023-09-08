import React from "react";
import styles from "./ContentLayout.module.scss";
import { Container } from "react-bootstrap";
import { S3_BUCKET } from "../../../utils/Constants";

const ContentLayout = ({ children, className, leftContentClass, rightContentClass }) => {
  return (
    <section className={`${styles.content_layout} ${className || ""}`}>
      <Container>
        <div className={styles.content_inner}>
          <div className={`${styles.content_left} ${leftContentClass || ""}`}>
            <div className={styles.content_left_inner}>{children}</div>
          </div>
          <div className={`${styles.content_right} ${rightContentClass || ""}`}>
            <img data-aos='fade-down' data-aos-offset="-400" data-aos-delay="400" src={`${S3_BUCKET.IMAGES}/hanumaan-ji.png`} alt="hanuman-ji" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContentLayout;
