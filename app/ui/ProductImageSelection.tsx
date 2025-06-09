'use client'

import styles from './ProductImageSelection.module.css';

import { useState } from 'react';
import Image from 'next/image';

// 一応画像の数は８個制限にしてある。


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
    {
      id: 4,
      src: '/images/beach_1.jpg',
      alt: 'beach',
      width: 1280,
      height: 720,
    },
    {
      id: 5,
      src: '/images/cabin_2.jpg',
      alt: 'beach',
      width: 1280,
      height: 720,
    },
    {
      id: 6,
      src: '/images/tiny_house_2.jpg',
      alt: 'beach',
      width: 1280,
      height: 720,
    },
    {
      id: 7,
      src: '/images/villa_1.jpg',
      alt: 'beach',
      width: 1280,
      height: 720,
    },
    {
      id: 8,
      src: '/images/beach_1.jpg',
      alt: 'beach',
      width: 1280,
      height: 720,
    },
  ]


export default function ProductImageSelection() {

  const [selectedImage, setSelectedImage] = useState(images[0]);

  function handleArraowClick(side: 'right' | 'left') {
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id)
    if (side === 'right') {
      setSelectedImage(images[(currentIndex + 1) % images.length]);
      
    } else if (side === 'left') {
      setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
      
    }
    
  }
  


  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image 
          src={selectedImage.src}
          alt={selectedImage.alt || 'image of product'}
          width={selectedImage.width || 1280}
          height={selectedImage.height || 720}
          className={`${styles.selectedImage}`}
          />

        <button className={styles.imageButtonLeft} onClick={() => handleArraowClick('left')}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.arrow}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        </button>
        <button className={styles.imageButtonRight} onClick={() => handleArraowClick('right')}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.arrow}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>

        </button>

      </div>


      <div className={styles.imageGallery}>
        {images.map((image) => {
          return (
            <div 
            key={image.id} className={`${styles.imageGalleryItem} ${selectedImage.id === image.id ? styles.selected : ''}`}
            onClick={() => setSelectedImage(image)}
            >
              <Image 
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className={styles.productImage}
                onMouseEnter={() => setSelectedImage(image)}
                />
            </div>
          )
        })}
      </div>

        
    </div>
  )
}