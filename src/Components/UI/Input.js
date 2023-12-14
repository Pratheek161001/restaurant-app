import React from 'react'
import classes from './Input.module.css'

const Input = ({id,onChange,type,max,min,defaultValue,step,label}) => {
  return (
    <div className={classes.input}>
        <label htmlFor={label}>{label}</label>
        <input label={label}
        id={id}
        type={type}
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        onChange={onChange}/>
    </div>
  )
}

export default Input;