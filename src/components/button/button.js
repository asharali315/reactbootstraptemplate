import React from 'react'
import './button.css'

function Button(props) {
    const {name,classStyle,onClick,...other } = props
  return (
      <button 
      className={classStyle} 
      onClick={onClick} 
      {...other}
      >{name}</button>
  )
}

export default Button;
