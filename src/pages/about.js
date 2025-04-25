import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <div className="page-container">
      <Head>
        <title>About - Wild West Tech</title>
        <meta name="description" content="About Wild West Tech - Your trusted partner for computer repair and custom builds in Southern Oregon" />
      </Head>

      <Navigation />
      <main className="main-content">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center">
            About Wild West Tech
          </h1>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-8 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="space-y-6 text-gray-300 leading-relaxed">
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
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-8 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="text-center space-y-4">
                <p className="text-2xl font-bold text-purple-400">We don't just fix computers.</p>
                <p className="text-xl text-gray-300">We build systems, design solutions, and help you carve out your place in the digital frontier.</p>
              </div>
            </div>

            <div className="text-center space-y-2">
              <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Welcome to Wild West Tech.
              </p>
              <p className="text-xl text-purple-400">
                Ride with the best...
              </p>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Link 
                href="/contact"
                className="px-6 py-3 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
              >
                Get in Touch
              </Link>
              <Link 
                href="/services"
                className="px-6 py-3 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
