import styles from '@/app/components/forms/customInput.module.css';
import React from 'react';

interface CustomInputProps {
  type: string;
  placeholder: string;
  id: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  readOnly?: boolean;
}


export default function CustomInput({type, placeholder, id, className, value, onChange, readOnly=false}: CustomInputProps) {
  return (
    <div className={styles.formGroup}>
      <input
        type={type}
        className={`${styles.input} ${className}`}
        id={id}
        placeholder=''
        required
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        />
      <label htmlFor={id} className={styles.label}>{placeholder}</label>
    </div>
  )
}
