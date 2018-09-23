import React from 'react'
import './square.css'

const Square = props => (
  <button className="Square" onClick={props.onClick}>{props.children}</button>
)

export default Square