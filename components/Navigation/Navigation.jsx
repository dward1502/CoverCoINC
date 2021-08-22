import React from 'react'
import Header from './Header';
import Navbar from './NavBar';

import styles from './navigation.module.scss'

const Navigation = () => {
    return (
        <header className={styles.Header}>
            <Header/>
            <Navbar/>
        </header>
    )
}

export default Navigation
