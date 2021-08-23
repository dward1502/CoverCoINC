import React, { Fragment, useContext } from 'react';
import Image from 'next/image';
import ProductContext from '../../../context/product-context';

import styles from './modal.module.scss';
import { FaTimes } from 'react-icons/fa';

const Modal = (props) => {
  const productCTX = useContext(ProductContext);
  console.log(`This is global context ${JSON.stringify(productCTX)}`);

  console.log(`This is data in the modal component ${JSON.stringify(props.selectedItem)}`);
  
  const {id,title,features,images} = props.selectedItem
  const selectedProduct = {
    id:id,
    title:title
  }

  const submitHandler = (item) => {
    console.log(item);
    productCTX.addProduct(item);
  }

  return (
    <Fragment>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <div className={styles.modal}>
        <div className={styles.exitBtn} onClick={props.onConfirm}>
          <FaTimes />
        </div>
        <div className={styles.container}>
          <div className={styles.info}>
            <h1>{title}</h1>
            <h3>Features</h3>
            <ul className={styles.list}>
              {features.map((listItem)=>{
                return (
                  <li key={listItem.id}>{listItem.text}</li>
                )
              })}
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
              <button onClick={submitHandler.bind(null,selectedProduct)}>Add Item</button>
            </div>
          </div>
          <div className={styles.images}>
            {images.map((imgItem)=>{
              return (
                <div key={imgItem.id} className={styles.imgContainer}>
                  <Image
                    src={imgItem.img}
                    alt='photo'
                    layout='fill'
                    className={styles.img}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
