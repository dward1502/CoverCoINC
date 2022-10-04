import { useReducer } from 'react';

import ProductContext from './product-context';

const defaultProductState = {
  items: [],
  productsSelected:false
};

const productReducer = (state, action) => {
  if (action.type === 'ADD') {
    const existingProductItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingProductItem = state.items[existingProductItemIndex];
    let updatedItems;
    if (existingProductItem) {
      const updatedItem = {
        ...existingProductItem,
      };
      updatedItems = [...state.items];
      updatedItems[existingProductItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      productsSelected:true
    };
  }
  if(action.type === 'REMOVE') {
    const existingProductItemIndex = state.items.findIndex((item) => item.id === action.item.id)
    const existingProductItem = state.items[existingProductItemIndex]
    let updatedItems ;
    const updatedItem = {...existingProductItem}
    updatedItems = [...state.items]
    updatedItems[existingProductItemIndex] = updatedItem;
    return {
      items:updatedItems,
      productsSelected:true
    }
  }



  return defaultProductState;
};


const ProductProvider = ({ children }) => {
  const [productState, dispatchProductAction] = useReducer(
    productReducer,
    defaultProductState
  );

  const addItemToProductsHandler = (item) => {
    dispatchProductAction({ type: 'ADD', item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchProductAction({type:'REMOVE', id: id})
  }

  const productContext = {
    products: productState.items,
    productsSelected:productState.productsSelected,
    addProduct: addItemToProductsHandler,
    removeProduct: removeItemFromCartHandler,
  };

  return (
    <ProductContext.Provider value={productContext}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
