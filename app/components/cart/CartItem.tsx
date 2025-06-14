import styles from './CartItem.module.css';

import Image from 'next/image';

import QuantityInput from '@/app/components/cart/QuantityInput';

export default function CartItem() {
  return (
    <div className={styles.cartItemContainer}>

      <div className={styles.imageContainer}>
        <Image 
          src='/images/cabin_2.jpg' 
          alt='beach' 
          width={1280} 
          height={720}
          className={styles.productImage}
        />
      </div>


      <div className={styles.infoContainer}>
        <h3 className={styles.productTitle}>COCO JEWEL ：FACE WASH ココジュエル　フェイスウォッシュ</h3>

        <div className={styles.description}>
          何かしらの説明 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repudiandae error iure assumenda ipsa labore esse quas fugit a at, illum, praesentium eum vero nam velit ipsam beatae quae? Repudiandae?
        </div>

        
        <div className={styles.quantityControl}>

          <QuantityInput />

          <div className={styles.iconWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.quantityIcon}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>

          </div>
        </div>

        
        
      </div>

      

      <div className={styles.price}>&yen;1500(税込)</div>

    </div>

  )
}