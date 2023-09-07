import React, { useEffect, useState } from 'react'
import styles from "./Homelayout.module.scss";
import { Outlet, useLocation } from 'react-router-dom'

const HomeLayout = () => {

   
    

    return (
        <main className={`${styles.home_layout}`}>
            <Outlet />
        </main>
    )
}

export default HomeLayout
