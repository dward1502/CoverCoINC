import { Fragment, useContext, useEffect, useState } from 'react';
import ProductContext from '../../../context/product-context';
import Notification from '../notification';

import { FaTimes } from 'react-icons/fa';
import styles from './productsModal.module.scss';


async function sendProductData(productData) {
    const response = await fetch('/api/products', {
        method:'POST',
        body: JSON.stringify(productData),
        headers:{
            'Content-Type':'application/json'
        }
    })

    const data = await response.json()
    if(!response.ok) {
        throw new Error(data.message || 'Something went wrong!')
    }
    return data;
}

const ViewRequest = (props) => {
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();
  const productCTX = useContext(ProductContext);

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const items = props.selectedItems;
  const totalAmount = items.length;

  const removeItemHandler = (id) => {
    console.log(id);
    productCTX.removeProduct(id)
  };

  async function sendRequestHandler() {
    //   event.preventDefault()
    let data = productCTX.products;
    setRequestStatus('pending')
    try {
        await sendProductData(data)
        setRequestStatus('success')
        const timer = setTimeout(() => {
          props.onConfirm()
        }, 2000);
        return () => clearTimeout(timer);
    } catch(error) {
        setRequestError(error.message)
        setRequestStatus('error')
    }
  }

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending product request ...',
      message: 'Your request is on its way!',
    };
  }
  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Product Request sent successfully',
    };
  }
  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error in sending request ...',
      message: requestError,
    };
  }

  return (
    <Fragment>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <div className={styles.modal}>
        <div className={styles.exitBtn} onClick={props.onConfirm}>
          <FaTimes />
        </div>
        <h1>Request List</h1>
        <ul className={styles.productList}>
          {items.map((item) => {
            return (
              <li key={item.id} className={styles.item}>
                <div>
                  <h2>{item.title}</h2>
                  <h3>Material</h3>
                  <h3>Color</h3>
                </div>
                <div className={styles.actions}>
                  <button onClick={() => removeItemHandler(item.id)}>
                    Remove Item
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <div>
          <div className={styles.total}>
            <h2>Total Items</h2>
            <h2>{totalAmount}</h2>
          </div>
          <button className={styles.btn} onClick={sendRequestHandler}>
            Send Request
          </button>
        </div>
      </div>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </Fragment>
  );
};

export default ViewRequest;
