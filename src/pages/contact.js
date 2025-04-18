import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Contact.module.css';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact - Wild West Tech</title>
        <meta name="description" content="Contact Wild West Tech for computer repairs and custom builds in Southern Oregon" />
      </Head>

      <div className={styles.container}>
        <h1 className={styles.title}>Contact Us</h1>
        
        <div className={styles.content}>
          <div className={styles.formSection}>
            <h2>Request Repair Service</h2>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone (optional)</label>
                <input type="tel" id="phone" name="phone" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="deviceType">Device Type</label>
                <select id="deviceType" name="deviceType" required>
                  <option value="">Select a device type</option>
                  <option value="computer">Computer/Laptop</option>
                  <option value="console">Gaming Console</option>
                  <option value="mobile">Mobile Device</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="issue">Describe the Issue</label>
                <textarea id="issue" name="issue" rows="4" required></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Submit Request
              </button>
            </form>
          </div>

          <div className={styles.contactInfo}>
            <h2>Direct Contact</h2>
            <p>For quick responses and inquiries:</p>
            <a href="mailto:info@wildwesttech.pro" className={styles.emailLink}>
              info@wildwesttech.pro
            </a>
            <p className={styles.note}>
              Based in Southern Oregon, serving the digital frontier with reliable tech solutions.
            </p>
          </div>
        </div>

        <div className={styles.backLink}>
          <Link href="/">Back to Home</Link>
        </div>
      </div>
    </div>
  );
} 