import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
      <header>
          <h1 className={styles.title}>FoodFinder</h1>
      </header>
  );
}
