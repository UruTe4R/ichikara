import styles from './StarRating.module.css';

import { IoStarHalfSharp as Half, IoStarSharp as Full, IoStarOutline as Empty } from 'react-icons/io5';

export default function StarRating() {

  const rating = 4.9;

  return (
    <div className={styles.container}>

      <p className={styles.rating}>{rating}</p>

      <div className={styles.starContainer}>
        {Array.from({ length: 5 }, (_, i) => i + 1).map((i: number) => {
          if (rating >= i) {
            return <Full key={i}/>
          } else if (rating > i - 1) {
            return <Half key={i}/>
          } else {
            return <Empty key={i}/>
          }
        })}
      </div>

      <p className={styles.number}>(123)</p>
    </div>
  )
}