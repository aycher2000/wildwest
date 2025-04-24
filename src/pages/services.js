import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Tech Services in Grants Pass, OR | Wild West Tech',
  description: 'Professional computer repair, custom PC builds, console repair, home setup, web design, and SEO services in Grants Pass, Oregon. Expert tech solutions for all your needs.',
  keywords: 'computer repair grants pass, custom PC builds oregon, console repair, home network setup, website design grants pass, SEO services oregon, tech support southern oregon',
  openGraph: {
    title: 'Tech Services in Grants Pass, OR | Wild West Tech',
    description: 'Expert computer repair, custom builds, and digital solutions in Southern Oregon. From hardware fixes to web design, we\'ve got your tech needs covered.',
    images: [
      {
        url: '/images/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Wild West Tech Services in Grants Pass, Oregon',
      },
    ],
  },
};

export default function Services() {
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
        <link rel="canonical" href="https://wildwesttech.io/services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Wild West Tech",
            "image": "/images/og-services.jpg",
            "description": metadata.description,
            "@id": "https://wildwesttech.io",
            "url": "https://wildwesttech.io/services",
            "telephone": "+1-541-555-0123",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Tech Trail",
              "addressLocality": "Grants Pass",
              "addressRegion": "OR",
              "postalCode": "97526",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 42.4393,
              "longitude": -123.3272
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "17:00"
            },
            "sameAs": [
              "https://facebook.com/wildwesttech",
              "https://twitter.com/wildwesttech",
              "https://instagram.com/wildwesttech"
            ]
          })}
        </script>
      </Head>
      <div className="page-container">
        <Navigation />
        <main className="main-content">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center">
            Our Services
          </h1>
          <p className="text-xl text-gray-400 text-center mb-12">
            From hardware repairs to custom builds and digital solutions, we've got your tech needs covered.
          </p>

          <div className="max-w-4xl mx-auto px-4 space-y-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <h2 className="text-2xl font-bold mb-3 text-purple-400">
                Computer Repair
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Fast, reliable fixes for slow systems, broken components, or virus-infected machines. From hardware to software, we'll get your rig back in shape.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <h2 className="text-2xl font-bold mb-3 text-purple-400">
                Custom PC Builds
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Whether it's a powerhouse gaming rig or a business workstation, we'll tailor a build that fits your exact needs — no bloated builds, just pure performance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <h2 className="text-2xl font-bold mb-3 text-purple-400">
                Console Repair
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Xbox, PlayStation, and Nintendo console repair services. We fix HDMI ports, hard drives, overheating, and power issues with care and precision.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <h2 className="text-2xl font-bold mb-3 text-purple-400">
                Home & Business Setup
              </h2>
              <p className="text-gray-300 leading-relaxed">
                From WiFi networks to home servers, Plex media centers, and remote work environments — we bring simplicity and performance to your setup.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <h2 className="text-2xl font-bold mb-3 text-purple-400">
                Website Design
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We create fast, secure, and mobile-friendly websites for artists, small businesses, and creators. No cookie-cutter templates — just clean, effective design.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <h2 className="text-2xl font-bold mb-3 text-purple-400">
                SEO & Optimization
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Lightweight SEO tailored to local search, and full AI discoverability prep for future-proof visibility.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
} 