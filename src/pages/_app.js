import "@/styles/globals.css";
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Title */}
        <title>Wild West Tech | Computer Repair & Custom Builds in Southern Oregon</title>

        {/* Meta Description */}
        <meta name="description" content="Wild West Tech offers expert computer repair, custom PC builds, and IT solutions across Southern Oregon. Ride with the best — Wild West Tech." />

        {/* Meta Keywords */}
        <meta name="keywords" content="computer repair, PC builds, tech support, Southern Oregon, Rogue Valley, custom PCs, IT solutions, Wild West Tech" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.wildwesttech.pro" />

        {/* Open Graph */}
        <meta property="og:title" content="Wild West Tech | Computer Repair & Custom Builds" />
        <meta property="og:description" content="Expert repairs, custom PC builds, and tech solutions in Southern Oregon. No-nonsense service you can trust." />
        <meta property="og:url" content="https://www.wildwesttech.pro" />
        <meta property="og:image" content="https://www.wildwesttech.pro/images/wildwesttech-logo.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wild West Tech" />
        <meta name="twitter:description" content="Computer repair, PC builds & tech support in Southern Oregon. Ride with the best." />
        <meta name="twitter:image" content="https://www.wildwesttech.pro/images/wildwesttech-logo.png" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Local Business Schema */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Wild West Tech",
            "image": "https://www.wildwesttech.pro/images/wildwesttech-logo.png",
            "@id": "https://www.wildwesttech.pro",
            "url": "https://www.wildwesttech.pro",
            "telephone": "+1-541-450-9799",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Service Area Only",
              "addressLocality": "Grants Pass",
              "addressRegion": "OR",
              "postalCode": "97527",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 42.4416,
              "longitude": -123.3217
            },
            "openingHoursSpecification": [
              {
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
              }
            ],
            "description": "Wild West Tech provides professional computer repair, custom PC builds, and IT support to clients across Grants Pass, Southern Oregon, and surrounding areas. Home-based with mobile service available."
          })
        }}
      />

      <Component {...pageProps} />
    </>
  );
}
