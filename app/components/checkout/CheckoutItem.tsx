import styles from './CheckoutItem.module.css'

import Image from 'next/image';

export default function CheckoutItem() {
  return (
    <div className={styles.container}>
      <div className={styles.productImageContainer}>
        <div className={styles.imageContainer}>

          <Image 
            src='/images/cabin_2.jpg' 
            alt='beach' 
            width={1280} 
            height={720}
            className={styles.productImage}
            />
        </div>
        <div className={styles.count}>2</div>
      </div>

      <div className={styles.infoContainer}>
        <h3 className={styles.productTitle}>COCO JEWEL ：FACE WASH ココジュエル　フェイスウォッシュ</h3>
      </div>

      <div className={styles.priceContainer}>
        <p className={styles.price}>¥2,000</p>
      </div>
    </div>
  )
}
