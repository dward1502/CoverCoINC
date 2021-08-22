 import React, { useEffect, useState, Fragment } from 'react'
import  ReactDOM  from 'react-dom';

import Backdrop from './backdrop';
import ModalOverlay from './modal'

const catalogModal = (props) => {

    const [isBrowser,setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true)
    },[])

    if(isBrowser) {
        return (
            <Fragment>
                {ReactDOM.createPortal(
                    <Backdrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root')
                )}
                {ReactDOM.createPortal(
                    <ModalOverlay onConfirm={props.onConfirm}/>, document.getElementById('modal-root')
                )}
            </Fragment>
        )
    } else {
        return null;
    }
}

export default catalogModal
