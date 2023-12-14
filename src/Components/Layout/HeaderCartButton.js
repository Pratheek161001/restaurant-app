import React from 'react'
import { useContext } from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'

const HeaderCartButton = props => {
  const cartCntx = useContext(CartContext);
  let quantity=0
  cartCntx.items.forEach(item => {
    quantity=quantity+Number(item.quantity)
  })
  return (
    <button className={classes.button} onClick={props.onclick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart </span>
        <span className={classes.badge}>{quantity}</span>
    </button>
  )
}

export default HeaderCartButton