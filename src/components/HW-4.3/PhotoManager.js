import React, { useState } from 'react'
import './PhotoManager.css'
import ImageContainer from './ImageContiner/ImageContainer'
import Input from './Input/Input'
import { nanoid } from 'nanoid'


const test = [
  {
    url:"https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg",
    id: nanoid(),
  },
  {
    url:"https://www.freedigitalphotos.net/images/img/homepage/394230.jpg",
    id: nanoid(),
  },
  {
    url:"https://static.toiimg.com/photo/72975551.cms",
    id: nanoid(),
  },
]

export default function PhotoManager() {
  const [images, setImages] = useState(test);

  const handleNewImages = (images) => {
    console.dir(images);
  }

  return (
    <div className="photo_manager">
      <div className="photo_manager__frame">
        <div className="photo_manager__container">
          <Input onNewImages={ handleNewImages } />
          <ImageContainer images={ images } onRemove={ setImages } />
        </div>
      </div>
    </div>
  )
}
