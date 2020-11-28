import React, { useState } from 'react'
import './PhotoManager.css'
import ImageContainer from './ImageContiner/ImageContainer'
import Input from './Input/Input'
import { nanoid } from 'nanoid'

export default function PhotoManager() {
  const [images, setImages] = useState([]);

  const fileToDataUrl = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
    
      fileReader.addEventListener('load', event => {
        resolve({ url:event.currentTarget.result, name: file.name, id: nanoid() });
      });
      
      fileReader.addEventListener('error', event => {
        reject(new Error(event.currentTarget.error));
      });
      
      fileReader.readAsDataURL(file);
    });
  }

  const handleSelect = async (images) => {
    const newImages = await Promise.all(images.map(o => fileToDataUrl(o)));
    setImages((prev) => ([...prev, ...newImages]))
  }

  const handleRemove = (id) => {
    setImages((prev) => prev.filter((image) => image.id !== id));
  }

  return (
    <div className="photo_manager">
      <div className="photo_manager__frame">
        <div className="photo_manager__container">
          <Input onNewImages={ handleSelect } />
          <ImageContainer images={ images } onRemove={ handleRemove } />
        </div>
      </div>
    </div>
  )
}
