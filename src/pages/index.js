import Head from 'next/head';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Wild West Tech | Computer Repair & Tech Solutions in Southern Oregon',
  description: 'Expert computer repair, custom PC builds, and tech solutions in Grants Pass and Southern Oregon. Fast, reliable service for all your technology needs.',
  keywords: 'computer repair grants pass, tech support southern oregon, custom PC builds, console repair, home network setup, website design',
  openGraph: {
    title: 'Wild West Tech | Tech Solutions in Southern Oregon',
    description: 'Your trusted tech partner in Southern Oregon. Expert computer repair, custom builds, and digital solutions.',
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Wild West Tech - Tech Solutions in Southern Oregon',
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://wildwesttech.io" />
      </Head>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Computer Repair, Custom Builds & Tech Solutions Across Southern Oregon and Beyond
            </h1>
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
    </>
  );
}