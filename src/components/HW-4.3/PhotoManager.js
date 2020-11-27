import React, { useState } from 'react'
import './PhotoManager.css'
import ImageContainer from './ImageContiner/ImageContainer'
import Input from './Input/Input'
import { nanoid } from 'nanoid'

export default function PhotoManager() {
  const [images, setImages] = useState([]);

  const fileToDataUrl = file => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
    
      fileReader.addEventListener('load', evt => {
        resolve({ url:evt.currentTarget.result, name: file.name, id: nanoid()});
      });
      
      fileReader.addEventListener('error', evt => {
        reject(new Error(evt.currentTarget.error));
      });
      
      fileReader.readAsDataURL(file);
    });
  }

  const handleSelect = async (images) => {
    const urls = await Promise.all(images.map(o => fileToDataUrl(o)));
    setImages((prev) => ([...prev, ...urls]))
}
  

  return (
    <div className="photo_manager">
      <div className="photo_manager__frame">
        <div className="photo_manager__container">
          <Input onNewImages={ handleSelect } />
          <ImageContainer images={ images } onRemove={ setImages } />
        </div>
      </div>
    </div>
  )
}
