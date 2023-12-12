import React from 'react'
import CartContext from './cart-context'

const CartProvider = props => {
    const addItemCarthandler=()=>{

    }
    const removeItemHandler=()=>{

    }
    const cartContext={
        items:[],
        totalAmount:0,
        addItem:addItemCarthandler,
        removeItem:removeItemHandler
        }
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartProvider