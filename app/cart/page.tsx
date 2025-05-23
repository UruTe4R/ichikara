import styles from '@/app/cart/cartpage.module.css';

import CheckOut from '@/app/components/checkout/Checkout';

export default function CartPage() {
  return (
    <main className={styles.main}>
      <h2>Cart</h2>
      <CheckOut />
    </main>
  );
}