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
  disabled?: boolean;
  required?: boolean;
}


export default function CustomInput({type, placeholder, id, className, value, onChange, readOnly=false, disabled=false, required=true}: CustomInputProps) {
  return (
    <div className={`${styles.formGroup} ${className}`}>
      <input
        type={type}
        className={`${styles.input}`}
        id={id}
        placeholder=''
        required={required}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        disabled={disabled}
  
        />
      <label htmlFor={id} className={styles.label}>{placeholder}</label>
    </div>
  )
}
