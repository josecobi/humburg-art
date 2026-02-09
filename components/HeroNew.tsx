'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Button from './Button';

export default function Hero() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <section className="sticky top-0 min-h-screen w-full bg-primary-50 overflow-hidden z-10" style={{ scrollSnapAlign: 'start' }}>
      {/* Background Video */}
      {!reducedMotion ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/TVY6064.jpg"
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(/TVY6064.jpg)' }}
          role="img"
          aria-label="Abstract artwork background"
        />
      )}

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
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-bold text-white leading-[0.9] tracking-tight mb-8 md:mb-12">
              CLAUDIA HUMBURG
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 md:mb-12"
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed px-4">
              Contemporary artist specializing in abstract expressionism
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              and mixed media explorations of form and emotion
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
          >
            <Button
              href="/galleries"
              variant="accent"
              size="md"
              className="min-w-[200px] w-full sm:w-auto"
            >
              View Gallery
            </Button>

            <Button
              href="#contact"
              variant="outline"
              size="md"
              className="min-w-[200px] w-full sm:w-auto"
            >
              Get in Touch
            </Button>
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
