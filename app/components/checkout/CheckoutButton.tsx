'use client'

import styles from './checkoutButton.module.css';

import CustomButton from '@/app/components/buttons/CustomButton';
import Link from 'next/link';

export default function CheckoutButton() {
  function handleCheckoutClick() {
    console.log('checkout clicked');
  }
  return (
    <Link
      href='/checkout'
    >
      <CustomButton 
        style={styles.checkoutButton}
        onClick={handleCheckoutClick}
        >
        ご注文手続きへ
      </CustomButton>
      </Link>
  )
}





