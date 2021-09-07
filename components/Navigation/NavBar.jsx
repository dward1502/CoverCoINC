import React, { useState } from 'react';
import Link from 'next/link';
import Dropdown from './Dropdown';

import { FaBars, FaTimes, FaCaretDown } from 'react-icons/fa';
import styles from './navigation.module.scss';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  return (
    <nav className={styles.navbar}>
      <Link href='#'>
        <a className={`${styles.btn} ${styles.mobileHeaderBtn}`}>Catalog Quote</a>
      </Link>
      <div className={styles.menuIcon} onClick={handleClick}>
        <i>{click ? <FaTimes /> : <FaBars />}</i>
      </div>
      <ul
        className={
          click ? `${styles.nav_menu} ${styles.active}` : styles.nav_menu
        }>
        <li>
          <Link href='/'>
            <a className={styles.nav_links} onClick={closeMobileMenu}>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a className={styles.nav_links} onClick={closeMobileMenu}>
              About
            </a>
          </Link>
        </li>
        <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Link href='/catalog'>
            <a className={styles.nav_links} onClick={closeMobileMenu}>
              Catalog
              <i className={styles.caret}>
                <FaCaretDown />
              </i>
            </a>
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <li>
          <Link href='/customize'>
            <a className={styles.nav_links} onClick={closeMobileMenu}>
              Customize
            </a>
          </Link>
        </li>
        <li>
          <Link href='/industries'>
            <a className={styles.nav_links} onClick={closeMobileMenu}>
              Industries
            </a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a className={styles.nav_links} onClick={closeMobileMenu}>
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
