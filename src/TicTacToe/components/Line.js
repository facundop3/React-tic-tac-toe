import React from 'react'
import Square from './Square'
const Line = props => (
  props.SquaresList.map((elem, index) =><Square onClick={props.onClick} key={index}>{elem[0]}</Square>)
)


export default Line