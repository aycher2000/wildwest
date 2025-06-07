import Head from 'next/head';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Computer Repair in Grants Pass, Oregon | Wild West Tech',
  description: 'Expert computer repair and tech support in Grants Pass, Oregon. Fast, honest service for laptops, desktops, and all your tech needs. Local tech support you can trust.',
  keywords: 'computer repair grants pass, laptop repair grants pass, tech support grants pass, computer service grants pass, virus removal grants pass, network setup grants pass',
  openGraph: {
    title: 'Computer Repair in Grants Pass, Oregon | Wild West Tech',
    description: 'Your trusted local tech partner in Grants Pass. Expert computer repair and tech support services.',
    images: [
      {
        url: '/images/og-grants-pass.jpg',
        width: 1200,
        height: 630,
        alt: 'Wild West Tech - Computer Repair in Grants Pass',
      },
    ],
  },
};

export default function GrantsPass() {
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
        <link rel="canonical" href="https://wildwesttech.io/grants-pass" />
        
        {/* Schema.org LocalBusiness markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Wild West Tech",
            "image": "https://wildwesttech.io/images/wildwesttech-logogold.png",
            "description": "Expert computer repair and tech support services in Grants Pass, Oregon",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Grants Pass",
              "addressRegion": "OR",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "42.4390",
              "longitude": "-123.3284"
            },
            "url": "https://wildwesttech.io/grants-pass",
            "telephone": "+1-541-123-4567",
            "priceRange": "$$",
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
              "https://www.facebook.com/wildwesttech",
              "https://www.instagram.com/wildwesttech"
            ]
          })}
        </script>
      </Head>

      <div className="page-container">
        <Navigation />
        <main className="main-content">
          {/* Hero Section */}
          <section className="text-center py-16 px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Computer Repair in Grants Pass, Oregon
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Fast, Honest Tech Support for Grants Pass Locals
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="/contact" 
                className="px-6 py-3 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
              >
                Get Help Now
              </a>
              <a 
                href="tel:+15411234567"
                className="px-6 py-3 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                Call (541) 450-9799
              </a>
            </div>
          </section>

          {/* Local Services Section */}
          <section className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">Expert Tech Support in Your Neighborhood</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <h3 className="text-xl font-bold mb-3 text-purple-400">Computer & Laptop Repair</h3>
                <p className="text-gray-300 leading-relaxed">From the Redwood Highway to the Rogue River, we provide fast repairs for all makes and models.</p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <h3 className="text-xl font-bold mb-3 text-purple-400">Virus Removal & Security</h3>
                <p className="text-gray-300 leading-relaxed">Keep your digital life safe with our expert virus removal and security setup services.</p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <h3 className="text-xl font-bold mb-3 text-purple-400">Network Setup</h3>
                <p className="text-gray-300 leading-relaxed">Reliable WiFi and network solutions for homes and businesses throughout Grants Pass.</p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <h3 className="text-xl font-bold mb-3 text-purple-400">Data Recovery</h3>
                <p className="text-gray-300 leading-relaxed">Don't lose your precious memories - we can recover data from damaged drives.</p>
              </div>
            </div>
          </section>

          {/* Local Area Section */}
          <section className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">Serving All of Grants Pass</h2>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-8">
              <p className="text-gray-300 leading-relaxed mb-4">
                Whether you're in the heart of downtown near the Caveman Bridge, up in the hills of Rogue River Heights, 
                or anywhere in between, we're your local tech experts. We understand the unique needs of our community 
                and provide personalized service to every corner of Grants Pass.
              </p>
              <p className="text-gray-300 leading-relaxed">
                From the historic downtown district to the growing neighborhoods of North Grants Pass, 
                we're committed to keeping your technology running smoothly. Need a quick fix? We're just a call away.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="max-w-4xl mx-auto px-4 py-12 text-center">
            <h2 className="text-3xl font-bold mb-8 text-purple-400">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="tel:+15414507977"
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1 cursor-pointer flex flex-col items-center justify-center text-center group"
                aria-label="Call Wild West Tech"
              >
                <h3 className="text-xl font-bold mb-3 text-purple-400 group-hover:text-white transition-colors duration-300">Call Us</h3>
                <p className="text-gray-300 break-words group-hover:text-white transition-colors duration-300">(541) 450-7977</p>
              </a>
              <a
                href="mailto:info@wildwesttech.pro"
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1 cursor-pointer flex flex-col items-center justify-center text-center group"
                aria-label="Email Wild West Tech"
              >
                <h3 className="text-xl font-bold mb-3 text-purple-400 group-hover:text-white transition-colors duration-300">Email</h3>
                <p className="text-gray-300 break-words group-hover:text-white transition-colors duration-300">info@wildwesttech.pro</p>
              </a>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1 flex flex-col items-center justify-center text-center">
                <h3 className="text-xl font-bold mb-3 text-purple-400">Hours</h3>
                <p className="text-gray-300 break-words">Mon-Fri: 9AM-5PM</p>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 text-lg"
              >
                Schedule Your Repair
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
} 