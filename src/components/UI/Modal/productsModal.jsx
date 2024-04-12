"use client"
import React, { useEffect, useState, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './backdrop';
import ModalOverlay from './requestModal';

const ProductsModal = (props) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const data = props.products;

  if (isBrowser) {
    return (
      <Fragment>
        {ReactDOM.createPortal(
          <Backdrop onConfirm={props.onConfirm} />,
          document.getElementById('backdrop-root')
        )}
        {ReactDOM.createPortal(
          <ModalOverlay onConfirm={props.onConfirm} selectedItems={data} />,
          document.getElementById('modal-root')
        )}
      </Fragment>
    );
  } else {
    return null;
  }
};

export default catalogModal;