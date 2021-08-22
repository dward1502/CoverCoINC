import React, { Fragment } from 'react';
import styles from './modal.module.scss';
import { FaTimes } from 'react-icons/fa';
import Image from 'next/image'

const Modal = (props) => {





  return (
    <Fragment>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <div className={styles.modal}>
        <div className={styles.exitBtn} onClick={props.onConfirm}>
          <FaTimes />
        </div>
        <div className={styles.container}>
          <div className={styles.info}>
            <h1>{props.title}</h1>
            <h3>Features</h3>
            <ul className={styles.list}>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit harum quidem ipsa sapiente, eligendi perferendis
                voluptate!
              </li>
              <li>Quidem laudantium minima expedita dignissimos saepe. </li>
              <li>commodi nisi possimus exercitationem magni soluta animi?</li>
              <li>
                ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                harum quidem ipsa sapiente,
              </li>
            </ul>
            <h3>Materials</h3>
            <div>
              <div className={styles.materialTitle}>
                <p>La Jolla</p> <p>Deneer Polyester</p>
              </div>
              <div className={styles.colorsCont}>
                <div className={styles.colors}>
                  <div className={styles.box} />
                  <p>Black</p>
                </div>
                <div className={styles.colors}>
                  <div className={styles.box} />
                  <p>Tan</p>
                </div>
                <div className={styles.colors}>
                  <div className={styles.box} />
                  <p>Green</p>
                </div>
                <div className={styles.colors}>
                  <div className={styles.box} />
                  <p>Burgundy</p>
                </div>
                <div className={styles.colors}>
                  <div className={styles.box} />
                  <p>Royal</p>
                </div>
              </div>
              <p>* Additional colors available upon request</p>
            </div>
            <div className={styles.dropdownContainer}></div>
            <div className={styles.btnContainer}>
              <button onClick={props.submitItem}>Add Item</button>
            </div>
          </div>
          <div className={styles.images}>
            <div className={styles.imgContainer}>
              <Image
                src='/roundTrashCan.svg'
                alt='photo'
                layout='fill'
                className={styles.img}
              />
            </div>
            <div className={styles.imgContainer}>
              <Image
                src='/roundTrashCan.svg'
                alt='photo'
                layout='fill'
                className={styles.img}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
