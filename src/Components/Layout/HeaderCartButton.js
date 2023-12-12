import React from 'react'
import { useContext } from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'

const HeaderCartButton = props => {
  const cartctx = useContext(CartContext);
  const numberofcartitems=cartctx.items.reduce((curr,item)=>{
    return curr+item.amount;
  },0);
  return (
    <button className={classes.button} onClick={props.onclick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberofcartitems}</span>
    </button>
  )
}

export default HeaderCartButton