import {createContext} from 'react'

const ProductContext = createContext({
    products:[],
    productsSelected: false,
    // eslint-disable-next-line no-unused-vars
    addProduct: (item) => {},
    removeProduct:(id) => {}
})

export default ProductContext;
