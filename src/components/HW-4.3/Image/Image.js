import React from 'react'
import './Image.css'

export default function Image(props) {
  return (
    <div className="photo_manager__img_box">
      <img className="photo_manager__img" src={ props.url } alt={ props.name } />
      <div className="photo_manager__img_remove_button" onClick={ () => props.onRemove(props.id) }>&#10008;</div>
    </div>
  )
}
