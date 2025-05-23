'use client'

import styles from './products.module.css';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import StarRating from '@/app/ui/StarRating';
export default function ProductsListItem() {
  const router = useRouter();

  

  const handleClick = () => {
    router.push('/product/1');
  }

  return (
    <li className={styles.listItem}>

      <div className={styles.imageContainer} onClick={handleClick}>
        <Image
          src='/images/cabin_2.jpg'
          alt='beach'
          width={1280}
          height={720}
          className={styles.productImage}
          />

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.navIcon}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      </div>

      {/* rating */}
      <StarRating />
      
    

      <h3 className={styles.h3} onClick={handleClick}>
        商品名
      </h3>

      <p className={styles.price}>Y2,278 <span className={styles.shippingcost}>{`(送料:500円)`}</span> </p>

      <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita atque maxime ut commodi molestias accusantium reiciendis deserunt officia. Excepturi facilis molestias culpa omnis? Qui eveniet dolores cupiditate accusantium, corporis nostrum?</p>

      <button 
        className={styles.cartButton}
      >Add To Cart</button>
      
    </li>
  )
}