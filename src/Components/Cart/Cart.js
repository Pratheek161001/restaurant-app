import React,{useContext, useState} from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal';
import CartCntxt from '../../store/cart-context';

const Cart = props => {
    const carycntx=useContext(CartCntxt)

    let totalprice=0    
    totalprice=carycntx.items.reduce((acc,item)=>acc+(item.price*item.quantity),0)

    const reducequantity=(itemid)=>{
        carycntx.removeItem(itemid);
    }
    const alerthandler=()=>{alert('THANK YOU FOR ODERING.....YOUR ORDER WILL BE DELIVERED IN FEW 30 MINUTES')}
    

    const cartItems= <h3><ul className={classes['cart-items']}>
    {carycntx.items.map((item)=>(
    <li key={item.name}>{item.name} ( {item.quantity} )-------------------Rs {item.price} <button onClick={()=>reducequantity(item.name)}>-</button></li>))
    }</ul></h3>;
        
  return (
    <Modal onclose={props.onclose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total amount in Rupees</span>
            <span>{totalprice}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onclose}>close</button>
            <button className={classes.button} onClick={alerthandler}>order</button>
        </div>
    </Modal>
  )
}

export default Cart