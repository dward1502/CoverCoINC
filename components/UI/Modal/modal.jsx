import React, { Fragment } from 'react';
import styles from './modal.module.scss';

const Modal = (props) => {
  return (
    <Fragment>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <div className={styles.modal}>
        <h1>this is the modal</h1>
      </div>
    </Fragment>
  );
};

export default Modal;
