import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deviceType: '',
    issue: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        deviceType: '',
        issue: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);

    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: error.message
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, error: null }));
      }, 5000);
    }
  };

  return (
    <div className="page-container">
      <Head>
        <title>Contact - Wild West Tech</title>
        <meta name="description" content="Contact Wild West Tech for computer repairs and custom builds in Southern Oregon" />
      </Head>
      <Navigation />
      <main className="main-content">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center">
            Contact Us
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">Request Repair Service</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-purple-400">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-gray-300"
                    required
                    disabled={status.submitting}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-purple-400">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-gray-300"
                    required
                    disabled={status.submitting}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-purple-400">Phone (optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-gray-300"
                    disabled={status.submitting}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="deviceType" className="block text-purple-400">Device Type</label>
                  <select
                    id="deviceType"
                    name="deviceType"
                    value={formData.deviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-gray-300"
                    required
                    disabled={status.submitting}
                  >
                    <option value="">Select a device type</option>
                    <option value="computer">Computer/Laptop</option>
                    <option value="console">Gaming Console</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="issue" className="block text-purple-400">Describe the Issue</label>
                  <textarea
                    id="issue"
                    name="issue"
                    rows="4"
                    value={formData.issue}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-gray-300"
                    required
                    disabled={status.submitting}
                  ></textarea>
                </div>

                {status.error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400">
                    {status.error}
                  </div>
                )}

                {status.submitted && (
                  <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400">
                    Your request has been sent successfully! We'll get back to you soon.
                  </div>
                )}

                <button
                  type="submit"
                  className={`w-full px-6 py-3 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed`}
                  disabled={status.submitting}
                >
                  {status.submitting ? 'Sending...' : 'Submit Request'}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <h2 className="text-2xl font-bold mb-4 text-purple-400">Direct Contact</h2>
                <p className="text-gray-300 mb-6">For quick responses and inquiries:</p>
                
                <div className="space-y-4">
                  <a 
                    href="tel:+15414509799" 
                    className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-purple-500 transition-all duration-300 group"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span className="text-gray-300 group-hover:text-purple-400 transition-colors">(541) 450-9799</span>
                  </a>

                  <a 
                    href="mailto:info@wildwesttech.pro" 
                    className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-purple-500 transition-all duration-300 group"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="M22 7L12 13L2 7"/>
                    </svg>
                    <span className="text-gray-300 group-hover:text-purple-400 transition-colors">info@wildwesttech.pro</span>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6 text-center">
                <p className="text-gray-300 italic">
                  Based in Southern Oregon, serving the digital frontier with reliable tech solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 