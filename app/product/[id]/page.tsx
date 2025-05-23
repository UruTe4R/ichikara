import styles from './page.module.css'
import type { Metadata } from 'next';

import ProductImageSelection from '@/app/ui/ProductImageSelection';


export const metadata: Metadata = {
  title: 'Product',
}
export default function ProductPage() {
  return (
    <>
    <h1>Product Page</h1>
    <main className={styles.page}>

      <section className={styles.leftside}>
        <div className={styles.stickyBox}>I am Sticky</div>
        
      </section>

      <section className={styles.rightside}>
        <div>
        {Array.from({ length: 200 }).map((_, i) => (
          <p key={i}>Right content line {i + 1}</p>
        ))}
      </div>
      </section>
    </main>
    </>
  )
}