import React, { Fragment } from 'react'
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

import styles from '../scss/Home.module.scss'

const Layout = ({children}) => {
    return (
        <Fragment>
            <Navigation/>
            <main className={styles.content}>{children}</main>
            <Footer/>
        </Fragment>
    )
}

export default Layout
