import React, { useContext, useState ,useRef } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import CartContext from '../../../store/cart-context'

const MealItemForm = props => {
  
  const cartcntx=useContext(CartContext);
  const [quantity,changequantity]=useState(1)

  const quantitychangehandler=(event)=>{
    changequantity(event.target.value)
  }

  const addItemToCart=(event)=>{
    event.preventDefault();
    cartcntx.addItem({...props.item , quantity:Number(quantity)})
  }

  return (
    <form className={classes.form}>
        <Input label="Amount" 
                  id={'amount_'+props.id}
                  type='number'
                  min='1'
                  max='5'
                  step='1'
                  defaultValue={quantity}
                  onChange={quantitychangehandler}
             />
        <button onClick={addItemToCart}>+Add</button>
    </form>
  )
} 
export default MealItemForm