import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Services() {
  return (
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
        </div>
      </main>
      <Footer />
    </div>
  );
} 