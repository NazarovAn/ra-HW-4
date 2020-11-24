import React, { useState } from 'react'
import './ColorConverter.css'
import Input from './Input/Input'
import Output from './Output/Output'

export default function ColorConverter() {
  const [state, setState] = useState({ color: '#ddeeee', output: 'rgb(221, 238, 238)' });
  const checkInputValue = (val) => {    
    if (val.length !== 7) {
      return;
    }
    const regex = /^#([A-F,a-f,0-9]+)$/;  

    if (regex.test(val)) {
      const r = parseInt(val.slice(1,3), 16);
      const g = parseInt(val.slice(3,5), 16);
      const b = parseInt(val.slice(5,7), 16);
      const color = `rgb(${r}, ${g}, ${b})`;
      setState((prev) => ({ ...prev, color, output: color }));
    } else {
      setState((prev) => ({ ...prev, color: '#ff4444', output: 'Ошибка!' }));
    }
  }
  return (
    <div className="color_converter__wrapper" style={{ backgroundColor: state.color }}>
      <div className="color_converter__form">
        <Input onChange={ checkInputValue } />
        <Output output={ state.output } />
      </div>
    </div>
  )
}
