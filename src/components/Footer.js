import Link from 'next/link';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  const handleDummyClick = (e) => {
    e.preventDefault();
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>
        <div className={styles.links}>
          <Link href="#" onClick={handleDummyClick} className={styles.link}>Services</Link>
          <Link href="#" onClick={handleDummyClick} className={styles.link}>FAQ</Link>
          <Link href="#" onClick={handleDummyClick} className={styles.link}>Blog</Link>
        </div>
        <div className={styles.copyright}>
          © 2025 Wild West Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 