import React, { useState } from 'react'
import './ColorConverter.css'
import Input from './Input/Input'
import Output from './Output/Output'

export default function ColorConverter() {
  const [color, setColor] = useState({ hex: '#ddeeee', rgb: 'rgb(221, 238, 238)' });

  const isValid = (value) => {
    return /^#([A-Fa-f0-9]+)$/.test(value) ? true : false
  }
  
  const convertHexToRgb = (value) => {
    const r = parseInt(value.slice(1,3), 16);
    const g = parseInt(value.slice(3,5), 16);
    const b = parseInt(value.slice(5,7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  }

  const handleInput = (value) => {
    if (value.length !== 7 ) {
      return null
    }

    if (!isValid(value)) {
      return setColor((prev) => ({ ...prev, hex: '#ff4444', rgb: 'Ошибка!' }));
    }
    
    setColor((prev) => ({ ...prev, hex: value, rgb: convertHexToRgb(value) }));
  }

  return (
    <div className="color_converter__wrapper" style={{ backgroundColor: color.hex }}>
      <div className="color_converter__form">
        <Input onChange={ handleInput } />
        <Output output={ color.rgb } />
      </div>
    </div>
  )
}
