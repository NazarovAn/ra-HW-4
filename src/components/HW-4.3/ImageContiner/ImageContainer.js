import React from 'react'
import './ImageContainer.css'
import Image from '../Image/Image'

export default function ImageContainer(props) {
  return (
    <div className="photo_manager__img_container">
      { props.images.map((image) => 
        <Image 
          url={ image.url }
          name={ image.name }
          id={image.id}
          key={ image.id }
          onRemove={ props.onRemove }
        />) }
    </div>
  )
}
