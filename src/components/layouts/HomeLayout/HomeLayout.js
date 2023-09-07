import React, { useEffect, useState } from 'react'
import styles from "./Homelayout.module.scss";
import { Outlet, useLocation } from 'react-router-dom'

const HomeLayout = () => {

    const location = useLocation();
    const [bgImg, setBgImage] = useState(false);

    useEffect(() => {
        (location.pathname === "/question") ? setBgImage(true) : setBgImage(false);
    }, [location])

    // useEffect(() => {
    //     alert("Called")
    //     switch (window.screen.orientation.type) {
    //         case "landscape-primary":
    //             console.log("That looks good.");
    //             break;
    //         case "landscape-secondary":
    //             console.log("Mmmh… the screen is upside down!");
    //             break;
    //         case "portrait-secondary":
    //         case "portrait-primary":
    //             console.log("Mmmh… you should rotate your device to landscape");
    //             break;
    //         default:
    //             console.log("The orientation API isn't supported in this browser :(");
    //     }
    // }, [])
    return (
        <main className={`${styles.home_layout} ${bgImg ? styles.ques_bg : ""}`}>
            <Outlet />
        </main>
    )
}

export default HomeLayout
