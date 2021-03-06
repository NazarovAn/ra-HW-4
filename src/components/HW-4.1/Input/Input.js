import React from 'react'
import './Input.css'

export default function Input(props) {
  return (
    <React.Fragment>
      <input className="color_converter__input" onChange={ (event) => props.onChange(event.target.value) } maxLength="7" />
    </React.Fragment>
  )
}
