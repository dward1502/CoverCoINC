import React from 'react';
import styles from './modal.module.scss';

const backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

export default backdrop;
