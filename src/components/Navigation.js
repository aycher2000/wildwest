import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from '@/styles/Navigation.module.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDummyClick = (e) => {
    e.preventDefault();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

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
        
        {isMobile ? (
          <>
            <button 
              className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            
            <div className={`${styles.mobileMenu} ${isOpen ? styles.show : ''}`}>
              <div className={styles.mobileLinks}>
                <Link href="/" className={styles.mobileLink} onClick={closeMenu}>Home</Link>
                <Link href="/about" className={styles.mobileLink} onClick={closeMenu}>About</Link>
                <Link href="/services" className={styles.mobileLink} onClick={closeMenu}>Services</Link>
                <Link href="/contact" className={styles.mobileLink} onClick={closeMenu}>Contact</Link>
              </div>
            </div>
          </>
        ) : (
          <div className={styles.links}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/services" className={styles.navLink}>Services</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
} 