import styles from './products.module.css';

import ProductsListItem from './ProductsListItem';
export default function ProductsList() {
  return (
    <>
      <h2 className={styles.h2}>
        list of products
      </h2>
      <ul className={styles.gridContainer}>
        <ProductsListItem />
        <ProductsListItem />
        <ProductsListItem />
        <ProductsListItem />
        <ProductsListItem />
        <ProductsListItem />
        <ProductsListItem />
        <ProductsListItem />
      </ul>
    </>
  )
}