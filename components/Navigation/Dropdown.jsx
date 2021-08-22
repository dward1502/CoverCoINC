import React, { Fragment, useState } from 'react'
import Link from 'next/link'
import {MenuItems} from '../../data/menuItem';

import styles from './navigation.module.scss';

const Dropdown = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <Fragment>
            <ul onClick={handleClick} className={click ? `${styles.dropdown_menu} ${styles.clicked}` : `${styles.dropdown_menu}`}>
                {MenuItems.map((item)=>{
                    return (
                        <li key={item.id}>
                            <Link href={item.path}>
                                <a className={styles.dropdown_link} onClick={() => setClick(false)}>{item.title}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </Fragment>
    )
}

export default Dropdown
