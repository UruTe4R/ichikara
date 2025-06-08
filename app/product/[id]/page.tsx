import styles from './page.module.css'
import type { Metadata } from 'next';

import ProductImageSelection from '@/app/ui/ProductImageSelection';


export const metadata: Metadata = {
  title: 'Product',
}
export default function ProductPage() {
  return (
    <>
      <main className={styles.productInfoSection}>

        <div className={styles.imageSection}>
          <ProductImageSelection />
        </div>

        <div className={styles.productDetail}>
          <div>
          {Array.from({ length: 100 }).map((_, i) => (
            <p key={i}>Right content line {i + 1}</p>
          ))}
        </div>
        </div>
      </main>
      <div>
          {Array.from({ length: 100 }).map((_, i) => (
            <p key={i}>Right content line {i + 1}</p>
          ))}
        </div>
    </>

  )
}