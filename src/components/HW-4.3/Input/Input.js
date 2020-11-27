import React, { useRef } from 'react'
import './Input.css'

export default function Input(props) {
  const fileRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onNewImages([...fileRef.current.files]);
  }

  const openFileInput = () => {
    fileRef.current.click();
  }

  return (
    <div className="photo_manager__input_container">
      <div className="photo_manager__select" onClick={ openFileInput }>
        <span>Click to select</span>
        <input type="file" className="photo_manager__file_input" ref={ fileRef } multiple onChange={ handleSubmit } />
      </div>
    </div>
  )
}
