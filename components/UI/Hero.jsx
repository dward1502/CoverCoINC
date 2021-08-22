import React from 'react';
import styles from './UI.module.scss';
import Image from 'next/image';

const Hero = (props) => {
  return (
    <div className={styles.Hero}>
      <Image
        src={props.image}
        alt={props.alt}
        layout='fill'
        className={styles.photo}
      />
      <h1>{props.title}</h1>
    </div>
  );
};

export default Hero;
