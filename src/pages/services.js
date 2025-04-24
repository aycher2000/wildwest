import Head from 'next/head';
import { useState } from 'react';
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
  const [openService, setOpenService] = useState(null);

  const services = [
    {
      title: "Computer Repair",
      description: "Fast, reliable fixes for slow systems, broken components, or virus-infected machines. From hardware to software, we'll get your rig back in shape."
    },
    {
      title: "Custom PC Builds",
      description: "Whether it's a powerhouse gaming rig or a business workstation, we'll tailor a build that fits your exact needs — no bloated builds, just pure performance."
    },
    {
      title: "Console Repair",
      description: "Xbox, PlayStation, and Nintendo console repair services. We fix HDMI ports, hard drives, overheating, and power issues with care and precision."
    },
    {
      title: "Home & Business Setup",
      description: "From WiFi networks to home servers, Plex media centers, and remote work environments — we bring simplicity and performance to your setup."
    },
    {
      title: "Website Design",
      description: "We create fast, secure, and mobile-friendly websites for artists, small businesses, and creators. No cookie-cutter templates — just clean, effective design."
    },
    {
      title: "SEO & Optimization",
      description: "Lightweight SEO tailored to local search, and full AI discoverability prep for future-proof visibility."
    }
  ];

  const toggleService = (index) => {
    setOpenService(openService === index ? null : index);
  };

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
            {/* Mobile Accordion (shown below md breakpoint) */}
            <div className="md:hidden space-y-2">
              {services.map((service, index) => (
                <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleService(index)}
                    className="w-full p-4 flex justify-between items-center bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-all duration-300"
                  >
                    <h2 className="text-xl font-bold text-purple-400">{service.title}</h2>
                    <svg
                      className={`w-6 h-6 transform transition-transform duration-300 ${
                        openService === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openService === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <p className="p-4 text-gray-300">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Cards (hidden below md breakpoint) */}
            <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <h2 className="text-2xl font-bold mb-3 text-purple-400">
                    {service.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
} 