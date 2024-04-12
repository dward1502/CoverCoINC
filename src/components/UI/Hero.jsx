import React from 'react';
import styles from './UI.module.scss';
import Image from 'next/image';

const Hero = (props) => {
  return (
    <div className={styles.hero}>
      <Image
        src={props.image}
        alt={props.alt}
        fill
        className={styles.photo}
      />
      <h1>{props.title}</h1>
    </div>
  );
};

export default Hero;