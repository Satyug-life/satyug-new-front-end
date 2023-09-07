import React from 'react'
import profileDummy from "../../../assets/images/person.png";
import logo from "../../../assets/images/logo.png";
import styles from "./Header.module.scss";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header_inner}>
                    <Link className={styles.logo} to="/"><img src={logo} alt="logo" /></Link>
                    <div className={styles.profile_box}>
                        <img src={profileDummy} alt="" />
                        <h3>Shiv Sharma</h3>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
