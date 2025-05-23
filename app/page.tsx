import styles from "./page.module.css";

import type { Metadata } from 'next';

import ProductsList from "./components/products/ProductsList";

export const metadata: Metadata = {
  title: 'Home | Ichikara',
}


export default function Home() {
  return (
    <main className={styles.main}>
      <ProductsList />
    </main>
    
    
  );
}
