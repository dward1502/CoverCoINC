import React, { Fragment } from 'react';
import Image from 'next/image';

import { FaSearch } from 'react-icons/fa';
import styles from './navigation.module.scss';

const Header = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            alt='CoverCoInc'
            src='/covercoinclogo.png'
            layout='fill'
            className={styles.custom_img}
          />
        </div>
        <div className={styles.searchContainer}>
          <input
            type='search'
            name='searchBox'
            id='search'
            placeholder='Search...'
            className={styles.searchBox}
          />
          <button type='submit' className={styles.searchBoxBtn}>
            <FaSearch />
          </button>
        </div>
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
