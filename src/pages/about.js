import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/About.module.css';
import Link from 'next/link';

export default function About() {
  return (
    <div className="page-container">
      <Head>
        <title>About - Wild West Tech</title>
        <meta name="description" content="About Wild West Tech - Your trusted partner for computer repair and custom builds in Southern Oregon" />
      </Head>

      <main className="main-content">
        <div className={styles.container}>
          <h1 className={styles.title}>About Wild West Tech</h1>
          <div className={styles.content}>
            <div className={styles.mainText}>
              <p>
                At Wild West Tech, we believe technology should ride as hard and reliably as a good horse.
                Based in Southern Oregon, we offer custom computer builds, repairs, IT support, and web design services — all delivered with no-nonsense expertise and craftsmanship you can trust.
              </p>

              <p>
                Born from the same spirit that tamed the frontier, Wild West Tech was founded for those who need more than just "off-the-shelf" solutions. We specialize in tailored setups for gamers, creators, entrepreneurs, and anyone who expects their technology to work as hard as they do.
              </p>

              <p>
                We're fluent in Linux, macOS, and Windows systems —Whether it's configuring servers, optimizing desktops, or taming the quirks of the latest OS updates, we've got the skills to handle it.
              </p>

              <p>
                If you're looking for better performance, setting up a media server, launching a personal website, or just bringing an old machine back to life — we're here to make sure you have the tools to succeed.
              </p>
            </div>

            <div className={styles.highlight}>
              <p>We don't just fix computers.</p>
              <p>We build systems, design solutions, and help you carve out your place in the digital frontier.</p>
            </div>

            <div className={styles.closing}>
              <p>Welcome to Wild West Tech.</p>
              <p>Ride with the best...</p>
            </div>
          </div>
        </div>
      </main>

      <footer>© 2025 Wild West Tech. All rights reserved.</footer>
    </div>
  );
}
