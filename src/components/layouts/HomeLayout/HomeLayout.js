import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from "./Homelayout.module.scss";

const HomeLayout = () => {

   
  
    return (
        <main className={`${styles.home_layout}`}>
            <Outlet />
        </main>
    )
}

export default HomeLayout
