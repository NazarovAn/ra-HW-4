import React, { useRef } from 'react'
import './Input.css'

export default function Input(props) {
  const fileRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onNewImages(fileRef.current.files);
  }

  return (
    <div className="photo_manager__input_container">
      <div className="photo_manager__select">
        <span>Click to select</span>
      </div>
      <form onSubmit={ handleSubmit }>
        <input type="file" id="photo_manager__file_input" ref={ fileRef } multiple />
        <button>ok</button>
      </form>
    </div>
  )
}
