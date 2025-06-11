'use client'

import styles from './CartItem.module.css'

import React, { useState } from 'react';

export default function QuntityInput() {

  const [quantity, setQuantity] = useState<number>(1);

  function handleQuantityChange(amount: number) {
    console.log('clicked')
    setQuantity((quantity) => {
      const newQuantity = quantity + amount;
      if (newQuantity < 1) {
        return 1;
      }
      return newQuantity;});
  }

  return(
    <div className={styles.quantityInputContainer}>
      <button onClick={() => handleQuantityChange(-1)} className={styles.quantityButton}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.quantityIcon}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>


      </button>

      {quantity}

      <button onClick={() => handleQuantityChange(1)} className={styles.quantityButton}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.quantityIcon}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>
  )
}