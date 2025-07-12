'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-green-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌳</span>
              </div>
              <span className="text-xl font-bold text-green-800">TreeCare</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-green-700 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/dashboard" className="text-green-700 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Dashboard
              </Link>
              <Link href="/trees" className="text-green-700 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Trees
              </Link>
              <Link href="/analytics" className="text-green-700 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Analytics
              </Link>
              <Link href="/about" className="text-green-700 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-700 hover:text-green-900 focus:outline-none focus:text-green-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 rounded-lg mt-2">
              <Link href="/" className="text-green-700 hover:text-green-900 block px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link href="/dashboard" className="text-green-700 hover:text-green-900 block px-3 py-2 rounded-md text-base font-medium">
                Dashboard
              </Link>
              <Link href="/trees" className="text-green-700 hover:text-green-900 block px-3 py-2 rounded-md text-base font-medium">
                Trees
              </Link>
              <Link href="/analytics" className="text-green-700 hover:text-green-900 block px-3 py-2 rounded-md text-base font-medium">
                Analytics
              </Link>
              <Link href="/about" className="text-green-700 hover:text-green-900 block px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              <div className="pt-4">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}