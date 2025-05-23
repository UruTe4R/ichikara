'use client'

import React from 'react';
import styles from './nav.module.css';

import useSearchBar from '@/app/hooks/useSearchBar';

export default function SearchBar() {
  const value = useSearchBar((state) => state.value)
  const setValue = useSearchBar((state) => state.setValue)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleClick() {
    console.log('search Icon clicked:', value)
  }
  return (
    <div className={styles.search}>
      <input 
        type="text" 
        value={value}
        onChange={handleChange}
        placeholder="Search..."
      />
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.searchIcon} onClick={handleClick}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

    </div>
  )
}