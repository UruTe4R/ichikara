import styles from './checkoutPage.module.css'

import CheckoutForm from '@/app/components/checkout/CheckoutForm';
import CheckoutSummary from '@/app/components/checkout/CheckoutSummary';
import CouponInput from '@/app/components/coupons/CouponInput';
import DiscountInput from '@/app/components/coupons/DiscontInput';


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
          {Array.from({ length: 100 }).map((n, i) => {
            return (
              <div key={i}>line{i}</div>
            )
          })}

        </div>

        <div className={styles.rightContainer}>
          <div className={styles.stickyContainer}>
            <CheckoutSummary />
          </div>
        </div>
      </div>
    </main>
  )
}
