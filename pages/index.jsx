import React, { Fragment } from 'react';
import Slider from '../components/Sliders/HomeSlider';
import Testimonial from '../components/Testimonials/Testimonial';
import Link from 'next/link'

import styles from '../scss/Home.module.scss';

const Index = () => {
  return (
    <Fragment>
      <Slider />
      <section className={styles.container}>
        <div className={styles.About}>
          <Link href='/about'>
            <a className='cardLink'>About</a>
          </Link>
        </div>
        <div className={styles.Customize}>
          <Link href='/customize'>
            <a className='cardLink'>Customize</a>
          </Link>
        </div>
        <div className={styles.Industries}>
          <Link href='/industries'>
            <a className='cardLink'>Industries</a>
          </Link>
        </div>
      </section>
      <Testimonial/>
    </Fragment>
  );
};

export default Index;
