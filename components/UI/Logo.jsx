import React from 'react'
import Image from 'next/image'

import styles from './UI.module.scss';

const Logo = () => {
    return (
        <div className={styles.unset_img}>
            <Image alt="CoverCoInc" src="/covercoinc.png" layout="fill" className={styles.custom_img} />            
        </div>
    )
}

export default Logo
