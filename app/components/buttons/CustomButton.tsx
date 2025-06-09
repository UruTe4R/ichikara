import React from 'react';
import styles from './CustomButton.module.css';

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  style?: string;
}

export default function CustomButton({ children, onClick, style }: CustomButtonProps) {
  return (
    <button 
      className={`${styles.button} ${style || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}