'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroVideoBackground() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Full-width Background Video */}
      <div className="absolute inset-0 w-full h-full">
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

        {/* Graduated Dark Overlay - lighter for more video visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/25 to-black/35"></div>

        {/* Additional vignette effect for focus */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at center, transparent 0%, transparent 50%, rgba(0,0,0,0.2) 100%)'
        }}></div>
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 h-screen flex items-center">
        <div className="relative w-full">
          {/* Artist Label - Top Left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 left-0 md:left-8 font-serif text-sm md:text-base tracking-wider text-white/90"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            ARTIST
          </motion.div>

          {/* Year/Location - Top Right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute top-0 right-0 md:right-8 font-serif text-sm md:text-base tracking-wider text-white/90"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            EST. 2024
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-20 md:pt-32">
            {/* Left Column - Typography with enhanced readability */}
            <div className="lg:col-span-7 xl:col-span-6 z-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {/* Name with backdrop blur for extra readability */}
                <div className="inline-block backdrop-blur-md bg-black/20 px-6 py-4 rounded-sm">
                  <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-[0.9] tracking-tight mb-0"
                    style={{
                      textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'
                    }}
                  >
                    CLAUDIA
                    <br />
                    HUMBURG
                  </h1>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="max-w-lg mt-8"
              >
                {/* Description with subtle background for readability */}
                <div className="backdrop-blur-md bg-black/30 px-6 py-5 rounded-sm border-l-2 border-white/40">
                  <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed"
                    style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}
                  >
                    Contemporary artist specializing in
                    <br />
                    abstract expressionism and mixed media
                    <br />
                    explorations of form and emotion
                  </p>

                  <Link
                    href="#gallery"
                    className="inline-flex items-center gap-3 text-white font-medium text-lg hover:gap-5 transition-all duration-300 group"
                    style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}
                  >
                    <span className="border-b-2 border-white">explore works</span>
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
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator - Bottom Center */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1.4, duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/80 text-xs tracking-widest"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}
          >
            <span className="rotate-90 origin-center whitespace-nowrap">SCROLL</span>
            <div className="w-px h-16 bg-white/60"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
