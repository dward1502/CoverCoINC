import React from 'react';
import Image from 'next/image'

import styles from './catalogPage.module.scss';
import Link from 'next/link';

const CatalogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.catalogInfo}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius porro
          laudantium debitis nam molestias deleniti provident, incidunt numquam
          at rerum, deserunt assumenda laborum dolorum, est iure! Dolores
          pariatur repellat rem? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Accusamus veritatis expedita, dolore repellat rerum
          necessitatibus in, harum autem recusandae doloribus nihil tempora
          eveniet dolorem, modi natus sequi quis eligendi at.
        </p>
      </div>
      <div className={styles.btnContainer}>
        <button>Contact Us</button>
      </div>
      <section className={styles.photos}>
        <div className={styles.imgContainer}>
          <Image
            src='/images/slideshow1.webp'
            alt='About image one'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src='/images/slideshow2.webp'
            alt='About image two'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src='/images/slideshow3.webp'
            alt='About image three'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </section>
      <div className={styles.functionality}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde autem
          quisquam eos, illum quidem praesentium vitae velit repellendus.
          Asperiores harum repudiandae excepturi maiores consequuntur molestiae,
          aspernatur veniam officiis ea quia?
        </p>
      </div>
      <section className={styles.catalogs}>
        <div className={styles.box}>
          <h1>Sports</h1>
          <Link href='/catalog/sports'>
            <a className={styles.link}>Catalog</a>
          </Link>
        </div>
        <div className={styles.box}>
          <h1>Conventions</h1>
          <Link href='/catalog/conventions'>
            <a className={styles.link}>Catalog</a>
          </Link>
        </div>
        <div className={styles.box}>
          <h1>Universities</h1>
          <Link href='/catalog/universities'>
            <a className={styles.link}>Catalog</a>
          </Link>
        </div>
        <div className={styles.box}>
          <h1>Casinos</h1>
          <Link href='/catalog/casino'>
            <a className={styles.link}>Catalog</a>
          </Link>
        </div>
        <div className={styles.box}>
          <h1>Restaurants</h1>
          <Link href='/catalog/restaurant'>
            <a className={styles.link}>Catalog</a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CatalogPage;
