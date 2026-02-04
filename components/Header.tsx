'use client';

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-primary-50/95 backdrop-blur-md border-b border-primary-200">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-serif text-xl md:text-2xl font-bold text-primary-900 tracking-tight hover:text-primary-700 transition-colors duration-300">
          Humburg Art
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {[
              { name: 'About', href: '#about' },
              { name: 'Gallery', href: '#gallery' },
              { name: 'Contact', href: '#contact' }
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-primary-700 hover:text-primary-900 font-medium transition-colors duration-300 border-b-2 border-transparent hover:border-primary-900 pb-1"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-primary-900 hover:text-primary-700 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary-50 border-b border-primary-200"
          >
            <nav className="container mx-auto px-4 py-6">
              <ul className="space-y-4">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Gallery', href: '#gallery' },
                  { name: 'Contact', href: '#contact' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-lg font-serif text-primary-900 hover:text-primary-700 transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
