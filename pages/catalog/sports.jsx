import React, { Fragment, useState, useContext } from 'react';
import axios from 'axios'

import Hero from '../../components/UI/Hero';
import Image from 'next/image';
import Modal from '../../components/UI/Modal/catalogModal';
import ProductContext from '../../context/product-context';

import styles from './specificCatalog.module.scss';
import sportsData from '../../data/sportscatalog';

const sports = () => {
  const [modal, setModal] = useState();
  const [selectedItem, setSelectedItem] = useState([]);
  const productCTX = useContext(ProductContext)

  let productSelected = productCTX.productsSelected;

  const modalHandlerNull = () => {
    setModal(null);
  };
  const modalHandler = (event) => {
    const ID = event.currentTarget.id;
    const filteredData = sportsData.find((item) => item.id === ID);
    setSelectedItem({filteredData}) 
    setModal(true);
  };

  const sendRequestHandler = () => {
    if(!productSelected) {
      return;
    }
    console.log(`Submitted Request`);
    let products = productCTX.products;
    axios({
      method: 'POST',
      url: '/api/products',
      data: JSON.stringify(products),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log('Response recieved');
        console.log(response);
      })
      .catch((res) => {
        console.log(`Error ${res}`);
      });
    
  }


  return (
    <Fragment>
      {modal && <Modal onConfirm={modalHandlerNull} product={selectedItem} />}
      <Hero
        image='/slideshow1.jpg'
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
          <button disabled={!productSelected} onClick={sendRequestHandler}>Send Request</button>
        </div>
      </section>
      <section className={styles.cardContainer}>
        {sportsData.map((item) => {
          return (
            <div className={styles.card} onClick={modalHandler} key={item.id} id={item.id}>
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
