import React from 'react'
import './Output.css'

export default function Output(props) {
  return (
    <React.Fragment>
      <div className="color_converter__output">{ props.output }</div>
    </React.Fragment>
  )
}
