import styles from './discontInput.module.css';

import Accordion from '@/app/ui/Accordion';

const points = 100;
export default function DiscontInput() {
  return (
    <Accordion
      title="ポイントを使う"
    >
      <div className={styles.container}>
        
        <p>使用可能ポイント:{points}p</p>

        <div className={styles.inputContainer}>
          <input type="number" placeholder='使用するポイントを入力してください' className={styles.input} max={points} min={0}/>
          <button className={styles.button}>適用</button>
        </div>
      </div>
    </Accordion>
  )
}
