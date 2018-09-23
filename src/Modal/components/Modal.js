import React from 'react'
import './modal.css'
import Button from './Button'
const Modal = props=> {
  const {modalMessage, winner} = props
  return (
    <div className="div-container">
    <div className="Modal-box">
      <h3>{winner}</h3>
      <hr/>
      <p>{modalMessage}</p>
      <h1 title="Beautiful Potatoe">🥔</h1>
      <Button onClick={props.handlePlayAgainClick}>Play Again</Button>
    </div>
  </div>
 )
}

export default Modal