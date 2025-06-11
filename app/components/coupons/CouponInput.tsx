

import styles from './couponInput.module.css';

import Accordion from '@/app/ui/Accordion';

export default function CouponInput() {
  



  return (
    <Accordion
      title="クーポンをお持ちの方"
    >
      <div className={styles.inputContainer}>
        <input type="text" placeholder='クーポンコードを入力してください' className={styles.input}/>
        <button className={styles.button}>適用</button>
      </div>
    </Accordion>
  )
}
