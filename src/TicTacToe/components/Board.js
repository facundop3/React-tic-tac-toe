import React from 'react'
import Line from './Line'
import './board.css'

const Board = props => (
  <div className="Board">
    <div className="Squares-box">
      { 
        props.squares.map((elem, index) => <Line onClick={props.handleSquareClick} SquaresList={props.squares} key={index}>{elem}</Line>)
      }
    </div>
  </div>
)

export default Board