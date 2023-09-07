import React from 'react'
import profileDummy from "../../../assets/images/person.png";
import logo from "../../../assets/images/logo.png";
import styles from "./Header.module.scss";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const name= useSelector((state)=>state.userDetails.name)
    const image= useSelector((state)=>state.userDetails.image)

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header_inner}>
                    <Link className={styles.logo} to="/"><img src={logo} alt="logo" /></Link>
                    <div className={styles.profile_box}>
                        <img src={image||profileDummy} alt="" />
                        <h3>{name||"--"}</h3>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
