'use client'

import styles from './ProductImageSelection.module.css';

import { useState } from 'react';
import Image from 'next/image';


const images = [
    {
      id: 1,
      src: '/images/cabin_2.jpg',
      alt: 'beach',
      width: 1280,
      height: 720,
    },
    {
      id: 2,
      src: '/images/tiny_house_2.jpg',
      alt: 'beach',
      width: 1280,
      height: 720,
    },
    {
      id: 3,
      src: '/images/villa_1.jpg',
      alt: 'beach',
      width: 1280,
      height: 720,
    },
  ]


export default function ProductImageSelection() {

  const [selectedImage, setSelectedImage] = useState(images[0]);


  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image 
          src='/images/cabin_2.jpg'
          alt='beach'
          width={1280}
          height={720}
          className={styles.productImage}
          />
        </div>

        <div className={styles.imageGallery}>
          {images.map((image) => {
            return (
              <div key={image.id} className={styles.imageGalleryItem}>
                <Image 
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className={styles.productImage}
                  />
              </div>
            )
          })}
        </div>
    </div>
  )
}