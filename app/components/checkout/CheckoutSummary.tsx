import styles from './CheckoutSummary.module.css'

import CheckoutItem from '@/app/components/checkout/CheckoutItem';

export default function CheckoutSummary() {
  return (
    <div className={styles.checkoutSummary}>
      <div className={styles.checkoutItems}>
        <CheckoutItem />
        <CheckoutItem />
      </div>

      <div className={styles.subtotal}>
        <p className={styles.subtotalText}>小計(4)</p>
        <p className={styles.subtotalPrice}>¥4,000</p>
      </div>
      <div className={styles.shippingcost}>
        <p className={styles.shippingcostText}>送料</p>
        <p className={styles.shippingcostPrice}>¥500</p>
      </div>

      <div className={styles.discount}>
        <p className={styles.discountText}>割引</p>
        <p className={styles.discountPrice}>- ¥500</p>
      </div>


      <div className={styles.total}>
        <p className={styles.totalText}>合計(税込)</p>
        <p className={styles.totalPrice}>¥4,000</p>
      </div>

    </div>
  )
}
