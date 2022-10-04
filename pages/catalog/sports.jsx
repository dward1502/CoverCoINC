import React, { Fragment, useState, useContext } from 'react';
// import axios from 'axios';

import Hero from '../../components/UI/Hero';
import Image from 'next/image';
import Modal from '../../components/UI/Modal/catalogModal';
import ViewRequestModal from '../../components/UI/Modal/productsModal'
import ProductContext from '../../context/product-context';

import styles from './specificCatalog.module.scss';
import sportsData from '../../data/sportscatalog';

const sports = () => {
  const [modal, setModal] = useState();
  const [viewRequest, setViewRequest] = useState();
  const [selectedItem, setSelectedItem] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const productCTX = useContext(ProductContext);


  let productSelected = productCTX.productsSelected;

  const modalHandlerNull = () => {
    setModal(null);
  };
  const requestModalHandlerNull = () => {
    setViewRequest(null)
  }
 
  const modalHandler = (event) => {
    const ID = event.currentTarget.id;
    const filteredData = sportsData.find((item) => item.id === ID);
    setSelectedItem({ filteredData });
    setModal(true);
  };

  const viewRequestHandler = () => {
      const products = productCTX.products;
      setSelectedProducts(products)
      setViewRequest(true)
  }
  
  return (
    <Fragment>
      {modal && <Modal onConfirm={modalHandlerNull} product={selectedItem} />}
      {viewRequest && (
        <ViewRequestModal
          onConfirm={requestModalHandlerNull}
          products={selectedProducts}
        />
      )}
      <Hero
        image='/images/slideshow1.webp'
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
          <button disabled={!productSelected} onClick={viewRequestHandler}>
            View Request
          </button>
        </div>
      </section>
      <section className={styles.cardContainer}>
        {sportsData.map((item) => {
          return (
            <div
              className={styles.card}
              onClick={modalHandler}
              key={item.id}
              id={item.id}>
              <h2>{item.title}</h2>
              <div className={styles.cardImg}>
                <Image
                  src={item.images[1].img}
                  alt='photo'
                  layout='fill'
                  className={styles.img}
                />
              </div>
            </div>
          );
        })}
      </section>
    </Fragment>
  );
};

export default sports;
