import React, { useState } from 'react'
import CartContext from './cart-context'

const CartProvider = props => {

  const [items,updateItems]=useState([])

    const addItemCarthandler=(item)=>{
      updateItems([...items,item])
    }
    const removeItemfromcartHandler=(id)=>{
      console.log('reducing')

    }
    const cartContext={
        items:items ,
        totalAmount:0,
        addItem:addItemCarthandler,
        removeItem:removeItemfromcartHandler,
        message:'i am accesible anywhere'
        }
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartProvider;