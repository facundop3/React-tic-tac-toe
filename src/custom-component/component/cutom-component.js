import React from 'react'
 const SayHi= props => (
   <h1 onClick={props.handleClick}>{props.name}</h1>
 )
 export default SayHi