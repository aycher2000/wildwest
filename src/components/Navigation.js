import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <Image 
            src="/images/wildwesttech-logogold.png"
            alt="Wild West Tech Logo"
            width={40}
            height={40}
            style={{
              width: '40px',
              height: '40px',
            }}
          />
        </div>
        <div className={styles.links}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </div>
      </div>
    </nav>
  );
} 