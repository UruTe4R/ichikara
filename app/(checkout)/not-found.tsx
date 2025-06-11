import styles from '@/app/(marketing)/not-found.module.css';

import Link from 'next/link';
 
export default function NotFound() {
  return (
    <main className={styles.main}>
      <h2 className={styles.h2}>404 Not Found</h2>
      <p>Could not find the requested invoice.</p>
      <Link
        href="/"
        className={styles.link}
      >
        Go Home
      </Link>
    </main>
  );
}