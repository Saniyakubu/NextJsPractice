import { Inter } from 'next/font/google';
import styles from './page.module.css';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href={'/users'}>users</Link>
      <h1>Hello</h1>
    </main>
  );
}
