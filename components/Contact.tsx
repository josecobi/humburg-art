'use client';

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-primary-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column - Info */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-8">
                  <span className="text-sm tracking-widest text-primary-600 font-serif">CONTACT</span>
                </div>

                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-8">
                  Let's start a
                  <br />
                  conversation
                </h2>

                <p className="text-lg text-primary-700 mb-12 leading-relaxed">
                  Interested in commissioning a piece, discussing a collaboration,
                  or learning more about my work? I'd love to hear from you.
                </p>

                {/* Contact Info */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm tracking-widest text-primary-600 font-serif mb-2">
                      EMAIL
                    </h4>
                    <a
                      href="mailto:claudiah1@mac.com"
                      className="text-lg text-primary-900 hover:text-primary-700 transition-colors duration-300 border-b border-primary-300 hover:border-primary-900"
                    >
                      claudiah1@mac.com
                    </a>
                  </div>

                  <div>
                    <h4 className="text-sm tracking-widest text-primary-600 font-serif mb-2">
                      PHONE
                    </h4>
                    <a
                      href="tel:+18182812487"
                      className="text-lg text-primary-900 hover:text-primary-700 transition-colors duration-300 border-b border-primary-300 hover:border-primary-900"
                    >
                      +1 818 281 2487
                    </a>
                  </div>

                  <div>
                    <h4 className="text-sm tracking-widest text-primary-600 font-serif mb-2">
                      LOCATION
                    </h4>
                    <p className="text-lg text-primary-900">Baltimore, MD</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-7">
              <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <label htmlFor="name" className="block text-sm tracking-widest text-primary-600 font-serif mb-3">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-primary-300 focus:border-primary-900 focus:outline-none transition-colors duration-300 text-primary-900 placeholder-primary-400"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm tracking-widest text-primary-600 font-serif mb-3">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-primary-300 focus:border-primary-900 focus:outline-none transition-colors duration-300 text-primary-900 placeholder-primary-400"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm tracking-widest text-primary-600 font-serif mb-3">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-primary-300 focus:border-primary-900 focus:outline-none transition-colors duration-300 text-primary-900 placeholder-primary-400"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm tracking-widest text-primary-600 font-serif mb-3">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-primary-300 focus:border-primary-900 focus:outline-none transition-colors duration-300 text-primary-900 placeholder-primary-400 resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="inline-flex items-center gap-3 text-primary-900 font-medium text-lg hover:gap-5 transition-all duration-300 group border-b-2 border-primary-900 pb-1"
                >
                  <span>send message</span>
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
                </motion.button>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
