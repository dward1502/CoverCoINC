import React from 'react';
import Image from 'next/image';

import Data from '../../data/testimonial';
import styles from './testimonial.module.scss';

const Testimonial = () => {
  return (
    <section className={styles.testimonials}>
      {Data.map((items) => {
        return (
          <div className={styles.card} key={items.id}>
            <div className={styles.imgContainer}>
              <Image src={items.img} alt={items.index} layout='fill' />
            </div>
            <div className={styles.text}>{items.testimonial}</div>
            <div className={styles.author}>{items.author}</div>
          </div>
        );
      })}
    </section>
  );
};

export default Testimonial;
