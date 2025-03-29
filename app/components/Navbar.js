"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { Sparkles, Menu, X, Settings, User, MessageSquarePlus } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { href: "/generate-dm", label: "Generate", icon: <MessageSquarePlus className="w-5 h-5 mr-2" /> },
    { href: "/personal-details", label: "Profile", icon: <User className="w-5 h-5 mr-2" /> },
    { href: "/settings", label: "Settings", icon: <Settings className="w-5 h-5 mr-2" /> },
  ];

  return (
    <nav className="relative top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Sparkles className="h-8 w-8 text-blue-600 transform group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -inset-2 bg-blue-100 rounded-full blur opacity-0 group-hover:opacity-50 transition-all duration-300" />
              </div>
              <span className="ml-3 text-xl font-bold text-blue-600">DM Gen</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className="flex items-center px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium group"
              >
                <span className="transform group-hover:scale-110 transition-transform duration-200">
                  {link.icon}
                </span>
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="flex items-center px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;