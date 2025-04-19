import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="page-container">
      <Navigation />
      <main className="main-content">
        {/* Logo */}
        <div className="logo-container">
          <Image 
            src="/images/wildwesttech-logogold.png"
            alt="Wild West Tech Logo"
            width={200}
            height={200}
            style={{
              width: '200px',
              height: '200px',
            }}
          />
        </div>

        <header>
          <h1>Wild West Tech</h1>
          <p className="subtitle">
            Computer Repair, Custom Builds & Tech Solutions Across Southern Oregon and Beyond
          </p>
          <div className="links">
            <a href="/contact">Request Repair</a>
            <a href="mailto:info@wildwesttech.pro">Get a Build Quote</a>
          </div>
        </header>

        <div className="services">
          <div>
            <h2>Computer Repair</h2>
            <p>Fast fixes for slow, broken, or virus-infected computers.</p>
          </div>

          <div>
            <h2>Custom PC Builds</h2>
            <p>Gaming, business, or home setups tailored to your needs.</p>
          </div>

          <div>
            <h2>Console Repair</h2>
            <p>Xbox, PlayStation, and Nintendo hardware repair services.</p>
          </div>

          <div>
            <h2>Home & Business Setup</h2>
            <p>WiFi networks, home servers, Plex media centers, and IT support.</p>
          </div>

          <div>
            <h2>Website Design</h2>
            <p>Small business, artist, or personal websites. No e-commerce yet.</p>
          </div>

          <div>
            <h2>SEO & Optimization</h2>
            <p>Light SEO and AI discoverability tuning for your site.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}