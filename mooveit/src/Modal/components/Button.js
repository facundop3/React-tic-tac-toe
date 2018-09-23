import React from 'react'
import './button.css'
const Button = props => {
  return (
    <button 
      className="Button primary"
      onClick={props.onClick}
    >{props.children}</button>
  )
}
export default Button