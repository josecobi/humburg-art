'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-primary-50 overflow-hidden">
      <div className="container mx-auto px-4 h-screen flex items-center">
        <div className="relative w-full">
          {/* Artist Label - Top Left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 left-0 md:left-8 font-serif text-sm md:text-base tracking-wider text-primary-700"
          >
            ARTIST
          </motion.div>

          {/* Year/Location - Top Right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute top-0 right-0 md:right-8 font-serif text-sm md:text-base tracking-wider text-primary-700"
          >
            EST. 2024
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-20 md:pt-32">
            {/* Left Column - Typography */}
            <div className="lg:col-span-5 z-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-primary-900 leading-[0.9] tracking-tight mb-8">
                  CLAUDIA
                  <br />
                  HUMBURG
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="max-w-lg"
              >
                <p className="text-lg md:text-xl text-primary-700 mb-8 leading-relaxed">
                  Contemporary artist specializing in
                  <br />
                  abstract expressionism and mixed media
                  <br />
                  explorations of form and emotion
                </p>

                <Link
                  href="#gallery"
                  className="inline-flex items-center gap-3 text-primary-900 font-medium text-lg hover:gap-5 transition-all duration-300 group"
                >
                  <span className="border-b-2 border-primary-900">explore works</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="lg:col-span-7 relative"
            >
              <div className="relative aspect-[1/1] lg:aspect-[4/3] max-w-3xl ml-auto shadow-2xl overflow-hidden bg-primary-200">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/test-humburgart.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Subtle overlay for consistency */}
                <div className="absolute inset-0 bg-primary-900/5 pointer-events-none"></div>
              </div>

              {/* Video Caption */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-4 text-sm text-primary-600 font-serif italic text-right"
              >
                Studio Work in Progress, 2024
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator - Bottom Center */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1.4, duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-primary-600 text-xs tracking-widest"
          >
            <span className="rotate-90 origin-center whitespace-nowrap">SCROLL</span>
            <div className="w-px h-16 bg-primary-400"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
