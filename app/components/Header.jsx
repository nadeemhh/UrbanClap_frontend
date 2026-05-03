"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-border animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-primary">ProHome Services</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-primary font-medium hover:text-primary-hover border-b-2 border-primary py-5">
              Home
            </Link>
            <Link href="/categories" className="text-text-muted hover:text-text-main py-5">
              Services
            </Link>
            <Link href="/experts" className="text-text-muted hover:text-text-main py-5">
              Experts
            </Link>
            <Link href="/bookings" className="text-text-muted hover:text-text-main py-5">
              My Bookings
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-background rounded-full px-4 py-2 border border-border">
              <svg className="w-4 h-4 text-text-muted mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span className="text-sm font-medium text-text-main">Sector 62, Noida</span>
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border cursor-pointer hover:bg-border/50 transition">
              <svg className="w-5 h-5 text-text-main" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-text-muted hover:text-text-main focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface border-t border-border animate-fade-in-up">
          <nav className="flex flex-col px-4 pt-2 pb-6 space-y-2">
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-primary font-medium hover:bg-primary-light/20 px-3 py-3 rounded-lg transition"
            >
              Home
            </Link>
            <Link 
              href="/categories" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-text-main hover:bg-gray-100 px-3 py-3 rounded-lg transition"
            >
              Services
            </Link>
            <Link 
              href="/experts" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-text-main hover:bg-gray-100 px-3 py-3 rounded-lg transition"
            >
              Experts
            </Link>
            <Link 
              href="/bookings" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-text-main hover:bg-gray-100 px-3 py-3 rounded-lg transition"
            >
              My Bookings
            </Link>
            
            <div className="mt-4 pt-4 border-t border-border flex items-center bg-background rounded-lg px-4 py-3">
              <svg className="w-5 h-5 text-text-muted mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span className="text-sm font-medium text-text-main">Sector 62, Noida</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
