import styles from '@/app/(marketing)/cart/cartpage.module.css';

import type { Metadata } from 'next';

import CartItem from '@/app/components/cart/CartItem';
import CheckOut from '@/app/components/checkout/Checkout';
import CheckoutButton from '../../components/checkout/CheckoutButton';
import CouponInput from '../../components/coupons/CouponInput';
import DiscountInput from '../../components/coupons/DiscontInput';


export const metadata: Metadata = {
  title: 'Cart'
}


const cartItems = [1, 2, 3, 4, 5, 6]

export default function CartPage() {

  
  return (
    <main className={styles.main}>
      <div className={styles.cartContainer}>

        <div className={styles.cartItemsContainer}>
          <h2>カート</h2>

          <div className={styles.cartItems}>
            {cartItems.map((item) => {
              return <CartItem key={item} />
            })}
            
          </div>
        </div>
        <div className={styles.checkoutWrapper}>


          <div className={styles.checkoutContainer}>

          <h2>ご注文金額</h2>
          <div>
            <CouponInput />  
            <DiscountInput /> 
          </div>

          <div className={styles.subtotal}>
            <p className={styles.subtotalText}>小計(税込)</p>
            <p className={styles.subtotalText}>
              &yen;4500
            </p>
          </div>

          <div className={styles.fee}>
            <p className={styles.feeText}>配送手数料</p>
            <p className={styles.feeText}>
              &yen;500
            </p>
          </div>

          <div className={styles.discount}>
            <p className={styles.discountText}>割引</p>
            <p className={styles.discountText}>
              - &yen;200
            </p>
          </div>

          <div className={styles.total}>
            <p className={styles.totalText}>合計(税込)</p>
            <p className={styles.totalText}>
              &yen;4800
            </p>
          </div>

          <CheckoutButton />

        </div>
        </div>
        

      </div>
    </main>
  );
}