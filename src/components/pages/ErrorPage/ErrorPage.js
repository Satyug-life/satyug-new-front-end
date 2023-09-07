import React from 'react'
import styles from "./ErrorPage.module.scss";
import { Container } from 'react-bootstrap';
import HeadingText from '../../common/HeadingText/HeadingText';

const ErrorPage = () => {
    return (
        <section className={styles.error_page}>
            <Container>
                <HeadingText
                    heading="There's an Error"
                />
            </Container>
        </section>
    )
}

export default ErrorPage
