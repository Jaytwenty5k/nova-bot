import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 flex justify-between items-center px-8 py-4 shadow-lg transition-all duration-500 border ${
        scrolled ? 'border-purple-500' : 'border-gray-500'
      } backdrop-blur-lg bg-gray-700 bg-opacity-75`}
    >
      <div className="logo text-white text-xl font-bold">Nova Bot</div>
      <div className="flex space-x-6">
        <Link href="/" className="text-white hover:text-purple-300 transition duration-300">
          Home
        </Link>
        <Link href="/features" className="text-white hover:text-purple-300 transition duration-300">
          Features
        </Link>
        <Link href="/docs" className="text-white hover:text-purple-300 transition duration-300">
          Docs
        </Link>
        <Link href="/contact" className="text-white hover:text-purple-300 transition duration-300">
          Contact
        </Link>
      </div>
    </nav>
  );
}