import React, { useState } from 'react'
import CartContext from './cart-context'

const CartProvider = props => {

  const [items,updateItems]=useState([])

    const addItemCarthandler=(item)=>{
      updateItems([...items,item])
    }
    const removeItemfromcartHandler = (id) => {
      const updatedItems = items.map((item) => {
        if (item.name === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
        updateItems(updatedItems.filter((item) => item.quantity > 0)); 
    };
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