import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link'

import styles from './navigation.module.scss';

const Header = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            alt='CoverCoInc'
            src='/images/coverCoLogoBlack.webp'
            layout='fill'
            className={styles.custom_img}
          />
        </div>
        <Link href='#'>
          <a className={`${styles.btn} ${styles.headerBtn}`}>Catalog Quote</a>
        </Link>
        <div className={styles.contactInfo}>
          <p>Contact Us Today!</p>
          <a href='tel:+18009598527'> 1.800.959.8527</a> |
          <a href='mailto:info@covercoinc.com'>info@covercoinc.com</a>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
