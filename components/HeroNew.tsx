'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-primary-50 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto px-4 h-screen flex items-center justify-center relative z-10">
        <div className="text-center max-w-4xl">
          {/* Artist Name */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="font-serif text-3xl md:text-3xl lg:text-3xl xl:text-[5rem] font-bold text-white leading-[0.9] tracking-tight mb-12">
              CLAUDIA HUMBURG
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed">
              Contemporary artist specializing in abstract expressionism
              <br />
              and mixed media explorations of form and emotion
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="#gallery"
              className="inline-flex items-center justify-center text-center px-8 py-4 bg-cyan-600 text-white font-medium text-lg hover:bg-cyan-700 transition-colors duration-300 min-w-[200px]"
            >
              View Gallery
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center text-center px-8 py-4 bg-cyan-600 text-white font-medium text-lg hover:bg-cyan-700 transition-colors duration-300 min-w-[200px]"
            >
              Get in Touch
            </Link>
          </motion.div>

          {/* Scroll Indicator - Bottom Center */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 text-xs tracking-widest"
          >
            <span className="rotate-90 origin-center whitespace-nowrap">SCROLL</span>
            <div className="w-px h-16 bg-white/50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
