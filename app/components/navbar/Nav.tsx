'use client'

import styles from './nav.module.css'
import { useState, useEffect } from 'react';

import Link from 'next/link';

import SearchBar from '@/app/components/navbar/SearchBar';
import UserNav from '@/app/components/navbar/UserNav';
export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setHidden(true); // scrolling down
      } else {
        setHidden(false); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`${styles.nav} ${hidden ? styles.hidden : styles.show}`}
    >
      <div className={styles.flexcontainer}>

      
        {/* logo */}
        <Link 
          href='/'
        >
          <div className={styles.logo}>
            <span className={styles.arrow}>UNO{'>'}{'>'}{'>'}</span>
            ichikara
            
          </div>
        </Link>

        {/* links */}
        <ul className={styles.links}>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        {/* Search */}
        <SearchBar />

        {/* UserNav */}
        <UserNav />
      </div>
      
    </nav>
  )
}