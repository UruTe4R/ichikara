import styles from './checkoutPage.module.css'

import CheckoutForm from '@/app/components/checkout/CheckoutForm';



import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Checkout'
}

export default function CheckoutPage() {
  return (
    <main className={styles.main}>
      <h3 className={styles.h3}>ご購入の手続き</h3>

      <div className={styles.gridContainer}>
        <div className={styles.leftContainer}>
          <CheckoutForm />
        </div>

        <div className={styles.rightContainer}>
          hi
        </div>
      </div>
    </main>
  )
}
