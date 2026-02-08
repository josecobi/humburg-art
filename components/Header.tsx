'use client';

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);

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
            <li>
              <Link
                href="/"
                className="text-primary-700 hover:text-primary-900 font-medium transition-colors duration-300 border-b-2 border-transparent hover:border-primary-900 pb-1"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-primary-700 hover:text-primary-900 font-medium transition-colors duration-300 border-b-2 border-transparent hover:border-primary-900 pb-1"
              >
                About
              </Link>
            </li>

            {/* Gallery with Dropdown */}
            <li
              className="relative flex items-center"
              onMouseEnter={() => setGalleryDropdownOpen(true)}
              onMouseLeave={() => setGalleryDropdownOpen(false)}
            >
              <button
                className="text-primary-700 hover:text-primary-900 font-medium transition-colors duration-300 border-b-2 border-transparent hover:border-primary-900 pb-1 flex items-center gap-1 self-center"
              >
                Gallery
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${galleryDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {galleryDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 left-0 bg-primary-50 border border-primary-200 shadow-lg min-w-[200px] py-2"
                  >
                    <Link
                      href="/small-canvas"
                      onClick={() => setGalleryDropdownOpen(false)}
                      className="block px-4 py-2 text-primary-700 hover:bg-primary-100 hover:text-primary-900 transition-colors duration-200"
                    >
                      Small Canvas
                    </Link>
                    <Link
                      href="/big-art"
                      onClick={() => setGalleryDropdownOpen(false)}
                      className="block px-4 py-2 text-primary-700 hover:bg-primary-100 hover:text-primary-900 transition-colors duration-200"
                    >
                      Big Art
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <Link
                href="#contact"
                className="text-primary-700 hover:text-primary-900 font-medium transition-colors duration-300 border-b-2 border-transparent hover:border-primary-900 pb-1"
              >
                Contact
              </Link>
            </li>
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
                <li>
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-serif text-primary-900 hover:text-primary-700 transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-serif text-primary-900 hover:text-primary-700 transition-colors duration-300"
                  >
                    About
                  </Link>
                </li>

                {/* Gallery with submenu */}
                <li>
                  <button
                    onClick={() => setGalleryDropdownOpen(!galleryDropdownOpen)}
                    className="flex items-center justify-between w-full text-lg font-serif text-primary-900 hover:text-primary-700 transition-colors duration-300"
                  >
                    Gallery
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${galleryDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {galleryDropdownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 mt-2 space-y-2"
                      >
                        <li>
                          <Link
                            href="/small-canvas"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-base text-primary-700 hover:text-primary-900 transition-colors duration-300"
                          >
                            Small Canvas
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/big-art"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-base text-primary-700 hover:text-primary-900 transition-colors duration-300"
                          >
                            Big Art
                          </Link>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                <li>
                  <Link
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-serif text-primary-900 hover:text-primary-700 transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
