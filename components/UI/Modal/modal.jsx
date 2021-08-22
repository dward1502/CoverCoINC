import React from 'react';
import styles from './modal.module.scss';

const Modal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm}>
        <h1>this is the modal</h1>
      </div>
    </div>
  );
};

export default Modal;
