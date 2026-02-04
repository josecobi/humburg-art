'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-primary-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 shadow-2xl">
              <Image
                src="/TVY6078.jpg"
                alt="Artist Portrait"
                fill
                className="object-cover"
              />
            </div>

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 space-y-2 text-sm text-primary-700"
            >
              <p className="font-serif italic">MFA, Contemporary Art</p>
              <p className="font-serif italic">Based in New York</p>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Section Label */}
              <div className="mb-8">
                <span className="text-sm tracking-widest text-primary-600 font-serif">ABOUT</span>
              </div>

              {/* Main Heading */}
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-12">
                Creating art that
                <br />
                speaks to the soul
              </h2>

              {/* Biography */}
              <div className="space-y-6 text-primary-700 leading-relaxed">
                <p className="text-lg">
                  With over a decade of experience in contemporary art, my work explores
                  the intersection of traditional techniques and modern expression. My artistic
                  journey has been shaped by a deep fascination with color, form, and the
                  emotional impact of visual art.
                </p>

                <p className="text-lg">
                  Through my paintings and mixed media works, I aim to create pieces that
                  resonate with viewers on a personal level, encouraging them to see the
                  world through a different lens. My approach combines careful planning
                  with spontaneous creativity.
                </p>

                <p className="text-lg">
                  Each piece is a dialogue between intention and intuition, where planned
                  compositions meet unexpected moments of inspiration. This balance creates
                  works that are both thoughtfully constructed and emotionally authentic.
                </p>
              </div>

              {/* Expertise Areas */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-12 pt-12 border-t border-primary-300"
              >
                <h3 className="text-sm tracking-widest text-primary-600 font-serif mb-6">
                  EXPERTISE
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    'Abstract Painting',
                    'Mixed Media',
                    'Digital Art',
                    'Sculpture'
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="text-primary-800 font-medium"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
