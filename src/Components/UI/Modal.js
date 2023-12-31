import React, { Fragment } from 'react'
import  ReactDOM  from 'react-dom'
import classes from './Modal.module.css'

const Backdrop=props=>{
    return <div className={classes.backdrop} onClick={props.onclose}></div>
}
const ModalOverlay=props=>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}
const portalelement=document.getElementById('overlays')

const Modal = props => {
  return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop onclose={props.onclose}/>,portalelement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalelement)}
    </Fragment>
  )
}

export default Modal