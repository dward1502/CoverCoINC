import React, { useState } from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";

import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import styles from "./navigation.module.scss";

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
      <Link href="#" className={`${styles.btn} ${styles.mobileHeaderBtn}`}>
        Catalog Quote
      </Link>
      <div className={styles.menuIcon} onClick={handleClick}>
        <i>{click ? <FaTimes /> : <FaBars />}</i>
      </div>
      <ul className={click ? `${styles.nav_menu} ${styles.active}` : styles.nav_menu}>
        <li>
          <Link href="/" className={styles.nav_links} onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.nav_links} onClick={closeMobileMenu}>
            About
          </Link>
        </li>
        <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Link href="/catalog" className={styles.nav_links} onClick={closeMobileMenu}>
            Catalog
            <i className={styles.caret}>
              <FaCaretDown />
            </i>
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <li>
          <Link href="/customize" className={styles.nav_links} onClick={closeMobileMenu}>
            Customize
          </Link>
        </li>
        <li>
          <Link href="/industries" className={styles.nav_links} onClick={closeMobileMenu}>
            Industries
          </Link>
        </li>
        <li>
          <Link href="/contact" className={styles.nav_links} onClick={closeMobileMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
