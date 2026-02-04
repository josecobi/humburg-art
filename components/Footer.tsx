'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-primary-100 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Left Column - Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-50 mb-4">
              Claudia Humburg
            </h3>
            <p className="text-primary-300 leading-relaxed mb-6 max-w-md">
              Contemporary artist exploring the boundaries of abstract
              expressionism and mixed media art.
            </p>
            <div className="text-sm text-primary-400">
              <p>Baltimore, MD</p>
              <p className="mt-2">
                <a
                  href="mailto:claudiah1@mac.com"
                  className="hover:text-primary-100 transition-colors duration-300 border-b border-transparent hover:border-primary-100"
                >
                  claudiah1@mac.com
                </a>
              </p>
              <p className="mt-2">
                <a
                  href="tel:+18182812487"
                  className="hover:text-primary-100 transition-colors duration-300 border-b border-transparent hover:border-primary-100"
                >
                  +1 818 281 2487
                </a>
              </p>
            </div>
          </motion.div>

          {/* Middle Column - Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3"
          >
            <h4 className="text-sm tracking-widest text-primary-300 font-serif mb-6">
              NAVIGATE
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'About', href: '#about' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Contact', href: '#contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-200 hover:text-primary-50 transition-colors duration-300 border-b border-transparent hover:border-primary-50 pb-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4"
          >
            <h4 className="text-sm tracking-widest text-primary-300 font-serif mb-4">
              NEWSLETTER
            </h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-primary-700 text-primary-100 placeholder-primary-400 focus:outline-none focus:bg-primary-600 transition-colors duration-300 border-b-2 border-primary-600 focus:border-primary-300"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary-100 text-primary-900 hover:bg-primary-50 transition-colors duration-300 font-medium"
              >
                Join
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-primary-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-400"
        >
          <p>&copy; {new Date().getFullYear()} Claudia Humburg. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary-100 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary-100 transition-colors duration-300">
              Terms of Use
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
