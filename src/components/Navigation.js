import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="relative z-50 flex items-center gap-3">
          <Link href="/" className="block">
            <Image 
              src="/images/wildwesttech-logogold.png"
              alt="Wild West Tech Logo"
              width={40}
              height={40}
              className="rounded-full transition-transform duration-300 hover:scale-110 shadow-lg shadow-purple-500/20"
              style={{
                width: '40px',
                height: '40px',
              }}
            />
          </Link>
          <div className="flex items-center">
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Wild West Tech
            </span>
          </div>
        </div>
        
        {isMobile ? (
          <>
            <button 
              className={`relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-full bg-gray-900/80 hover:bg-gray-900 transition-all duration-300 ${isOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-purple-400 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-purple-400 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-purple-400 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
            
            <div 
              className={`fixed top-0 left-0 w-full h-full z-40 bg-black/95 backdrop-blur-lg transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
              style={{ position: 'fixed', top: 0, height: '100vh' }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-4">
                <div className="mb-8 flex items-center gap-3">
                  <Image 
                    src="/images/wildwesttech-logogold.png"
                    alt="Wild West Tech Logo"
                    width={60}
                    height={60}
                    className="rounded-full shadow-lg shadow-purple-500/20"
                  />
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Wild West Tech
                  </span>
                </div>
                <Link 
                  href="/" 
                  className="w-full max-w-sm px-8 py-3 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-gray-300 hover:text-purple-400 hover:border-purple-500/40 transition-all duration-300 text-center"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="w-full max-w-sm px-8 py-3 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-gray-300 hover:text-purple-400 hover:border-purple-500/40 transition-all duration-300 text-center"
                  onClick={closeMenu}
                >
                  About
                </Link>
                <Link 
                  href="/services" 
                  className="w-full max-w-sm px-8 py-3 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-gray-300 hover:text-purple-400 hover:border-purple-500/40 transition-all duration-300 text-center"
                  onClick={closeMenu}
                >
                  Services
                </Link>
                <Link 
                  href="/contact" 
                  className="w-full max-w-sm px-8 py-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-center"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="px-4 py-2 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-gray-300 hover:text-purple-400 hover:border-purple-500/40 transition-all duration-300"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="px-4 py-2 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-gray-300 hover:text-purple-400 hover:border-purple-500/40 transition-all duration-300"
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="px-4 py-2 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-gray-300 hover:text-purple-400 hover:border-purple-500/40 transition-all duration-300"
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
} 