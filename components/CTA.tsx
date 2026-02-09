'use client';

import { motion } from 'framer-motion';
import Button from './Button';

export default function CTA() {
  return (
    <section className="sticky top-0 min-h-screen flex items-center bg-gradient-to-br from-primary-100 via-primary-50 to-white overflow-hidden z-10 relative" style={{
      scrollSnapAlign: 'start',
      minHeight: '100dvh'
    }}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-6">
              Let's Create Together
            </h2>
            <p className="text-lg md:text-xl text-primary-700 mb-12 max-w-2xl mx-auto leading-relaxed">
              Whether you're looking for a commission piece or want to explore available works,
              I'd love to hear from you and discuss how art can transform your space.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button
              href="/galleries"
              variant="accent"
              size="md"
              className="transform hover:-translate-y-1 min-w-[220px]"
            >
              Browse Gallery
            </Button>

            <Button
              href="#contact"
              variant="secondary"
              size="md"
              className="transform hover:-translate-y-1 min-w-[220px]"
            >
              Commission a Piece
            </Button>
          </motion.div>

          {/* Secondary text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-sm md:text-base text-primary-600"
          >
            Available for commissions, exhibitions, and collaborations
          </motion.p>
        </div>
      </div>
    </section>
  );
}
