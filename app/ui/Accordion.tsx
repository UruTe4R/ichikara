'use client'

import styles from './accordion.module.css'

import { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} onClick={handleClick}>
        <p>{title}</p>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${styles.icon} ${isOpen ? styles.rotate : styles.rotateBack}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
        </div>
      </div>
      <div className={isOpen ? styles.expand : styles.collapse}>
        {isOpen && children}
      </div>
      
    </div>
  )
}