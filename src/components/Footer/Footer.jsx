"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

import styles from './footer.module.scss';

import LOGO from "../../assets/images/coverCoLogoBlack.webp";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            alt='CoverCoInc'
            src={LOGO}
            fill
            className={styles.custom_img}
          />
        </div>

        <div className={styles.nav}>
          <Link href='/'>
            Home
          </Link>
          <Link href='/about'>
            About
          </Link>
          <Link href='/contact'>
            Contact
          </Link>
        </div>
        <div className={styles.nav}>
          <Link href='/catalog'>
            Catalog
          </Link>
          <Link href='/industries'>
            Industries
          </Link>
          <Link href='/customize'>
            Customize
          </Link>
        </div>
        <div className={styles.newsLetter}>
          <p>Sign up for newsletter today!</p>
          <form id='newsletter' className={styles.form}>
            <input
              type='email'
              name='newsletter'
              id='email'
              placeholder='Your E-Mail'
            />
            <button type='submit' form='newsletter' className={styles.button}>
              Sign Up
            </button>
          </form>
        </div>
        <div className={styles.socialIcons}>
          <a href='' rel='noreferrer' target='_blank'>
            <i>
              <FaInstagram />
            </i>
          </a>

          <a href='' rel='noreferrer' target='_blank'>
            <i>
              <FaTwitter />
            </i>
          </a>

          <a
            href='https://www.facebook.com/Coverco-Inc-106844079375679/'
            rel='noreferrer'
            target='_blank'>
            <i>
              <FaFacebook />
            </i>
          </a>

          <a href='' rel='noreferrer' target='_blank'>
            <i>
              <FaLinkedin />
            </i>
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2021 ColorCoInc All Rights Reserved</p>
        <Link href='/privacy_policy'>
          Privacy Policy
        </Link>
        <Link href='/terms_of_use'>
          Terms of Use
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
