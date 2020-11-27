import React from 'react'
import './ImageContainer.css'
import Image from '../Image/Image'

export default function ImageContainer(props) {
  const handleRemove = (id) => {
    props.onRemove((prev) => prev.filter((image) => image.id !== id));
  }

  return (
    <div className="photo_manager__img_container">
      { props.images.map((image) => <Image url={ image.url } id={ image.id } key={ image.id } onRemove={ handleRemove }/>) }
    </div>
  )
}
