import React from 'react'
import styles from "./Header.module.scss";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProfileDropdown from './ProfileDropdown/ProfileDropdown';
import { S3_BUCKET } from '../../../utils/Constants';

const Header = () => {

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header_inner}>
                    <Link className={styles.logo} to="/"><img src={`${S3_BUCKET.IMAGES}/logo.png`} alt="logo" /></Link>
                    <ProfileDropdown />
                </div>
            </Container>
        </header>
    )
}

export default Header
