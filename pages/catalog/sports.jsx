import React, { Fragment, useState } from 'react';
import Hero from '../../components/UI/Hero';
import Image from 'next/image'
import Modal from '../../components/UI/Modal/catalogModal'

import styles from './specificCatalog.module.scss';

const sports = () => {
  const [modal,setModal] = useState()

  const modalHandlerNull = () => {
    setModal(null)
  }
  const modalHandler = () => {
    setModal(true)
  }


  return (
    <Fragment>
      {modal && (<Modal onConfirm={modalHandlerNull}/>)}
      <Hero
        image='/slideshow1.jpg'
        alt='Sports catalog hero banner'
        title='Sports'
      />
      <section className={styles.header}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, quia.
          Eveniet modi natus voluptates dolorum tempora atque quas eligendi
          cupiditate magni amet quasi vel earum, quaerat dicta culpa harum
          minima? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
          sequi aliquam molestiae exercitationem, veritatis atque, impedit
          laborum ut vero commodi suscipit ipsum asperiores culpa voluptatum,
          eveniet delectus quae repudiandae! Quasi.
        </p>
        <div className={styles.btnContainer}>
          <button>Download PDF</button>
          <button disabled>Send Request</button>
        </div>
      </section>
      <section className={styles.cardContainer}>
        <div className={styles.card} onClick={modalHandler}>
          <h2>Trash can cover</h2>
          <div className={styles.cardImg}>
            <Image
              src='/slideshow1.jpg'
              alt='photo'
              layout='fill'
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.card}>
          <h2>Trash can cover</h2>
          <div className={styles.cardImg}>
            <Image
              src='/slideshow1.jpg'
              alt='photo'
              layout='fill'
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.card}>
          <h2>Trash can cover</h2>
          <div className={styles.cardImg}>
            <Image
              src='/slideshow1.jpg'
              alt='photo'
              layout='fill'
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.card}>
          <h2>Trash can cover</h2>
          <div className={styles.cardImg}>
            <Image
              src='/slideshow1.jpg'
              alt='photo'
              layout='fill'
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.card}>
          <h2>Trash can cover</h2>
          <div className={styles.cardImg}>
            <Image
              src='/slideshow1.jpg'
              alt='photo'
              layout='fill'
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.card}>
          <h2>Trash can cover</h2>
          <div className={styles.cardImg}>
            <Image
              src='/slideshow1.jpg'
              alt='photo'
              layout='fill'
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.card}>
          <h2>Trash can cover</h2>
          <div className={styles.cardImg}>
            <Image
              src='/slideshow1.jpg'
              alt='photo'
              layout='fill'
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.card}>
          <h2>Trash can cover</h2>
          <div className={styles.cardImg}>
            <Image
              src='/slideshow1.jpg'
              alt='photo'
              layout='fill'
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.card}>
          <h2>Trash can cover</h2>
          <div className={styles.cardImg}>
            <Image
              src='/slideshow1.jpg'
              alt='photo'
              layout='fill'
              className={styles.img}
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default sports;
