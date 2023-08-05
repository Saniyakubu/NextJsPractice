import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';
export default function About() {
  throw new Error('error');
  return (
    <div className={styles.div}>
      <Link href={'/'}>Back to home</Link>
      <h1 className={styles.h1}>Hello About</h1>
    </div>
  );
}
