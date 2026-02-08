'use client';

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export interface GalleryItem {
  id: number;
  category: string;
  src: string;
  title: string;
  year: string;
  medium: string;
  size: string;
  series: string;
  featured?: boolean;
}

interface GalleryTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  items: GalleryItem[];
  showCategoryFilter?: boolean;
}

const categories = ["all", "painting", "mixed-media"];

export default function GalleryTemplate({
  title,
  subtitle,
  description,
  items,
  showCategoryFilter = true
}: GalleryTemplateProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState<GalleryItem | null>(null);
  const [showZoomInstructions, setShowZoomInstructions] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const filteredItems = selectedCategory === "all"
    ? items
    : items.filter(item => item.category === selectedCategory);

  // Monitor zoom state and update cursor
  useEffect(() => {
    if (!open) return;

    let isDragging = false;
    let styleElement: HTMLStyleElement | null = null;

    // Create a global style override
    const injectGlobalCursorStyle = (cursor: 'grab' | 'grabbing' | 'default') => {
      if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'lightbox-cursor-override';
        document.head.appendChild(styleElement);
      }

      if (cursor === 'default') {
        styleElement.textContent = '';
        return;
      }

      styleElement.textContent = `
        .yarl__container,
        .yarl__container *,
        .yarl__slide,
        .yarl__slide *,
        .yarl__slide_current,
        .yarl__slide_current *,
        .yarl__slide_current img {
          cursor: ${cursor} !important;
        }
      `;

      console.log('Applied cursor:', cursor);
    };

    const removeGlobalCursorStyle = () => {
      if (styleElement) {
        styleElement.remove();
        styleElement = null;
      }
    };

    // Simplified: just check if lightbox is open, apply grab cursor to all elements
    injectGlobalCursorStyle('grab');

    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.yarl__container')) {
        console.log('Mouse down - applying grabbing');
        isDragging = true;
        injectGlobalCursorStyle('grabbing');
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        console.log('Mouse up - applying grab');
        isDragging = false;
        injectGlobalCursorStyle('grab');
      }
    };

    // Add event listeners
    document.addEventListener('mousedown', handleMouseDown, true);
    document.addEventListener('mouseup', handleMouseUp, true);

    return () => {
      removeGlobalCursorStyle();
      document.removeEventListener('mousedown', handleMouseDown, true);
      document.removeEventListener('mouseup', handleMouseUp, true);
    };
  }, [open]);

  const openLightbox = (index: number) => {
    console.log('Opening lightbox, index:', index);
    setCurrentImage(index);
    setOpen(true);
    setShowZoomInstructions(true);

    console.log('showZoomInstructions set to true');

    // Auto-hide after 8 seconds
    setTimeout(() => {
      console.log('Auto-hiding instructions');
      setShowZoomInstructions(false);
    }, 8000);
  };

  const openEnquiry = (artwork: GalleryItem) => {
    setSelectedArtwork(artwork);
    setEnquiryModalOpen(true);
  };

  return (
    <section className="py-20 md:py-32 bg-primary-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="mb-8">
            <span className="text-sm tracking-widest text-primary-600 font-serif">{subtitle}</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg text-primary-700 max-w-2xl">
            {description}
          </p>
        </motion.div>

        {/* Category Filter */}
        {showCategoryFilter && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 capitalize transition-all duration-300 border-b-2 ${
                  selectedCategory === category
                    ? "border-primary-900 text-primary-900 font-medium"
                    : "border-transparent text-primary-600 hover:border-primary-400 hover:text-primary-800"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        )}

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              {/* Image */}
              <div
                className="relative w-full bg-transparent cursor-pointer mb-6"
                style={{
                  aspectRatio: '3/4',
                  maxHeight: '500px',
                  minHeight: '350px',
                  filter: 'drop-shadow(0 10px 25px rgba(45, 40, 32, 0.12))'
                }}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-contain transition-all duration-700 group-hover:scale-105"
                />
              </div>

              {/* Details */}
              <div className="space-y-3">
                {/* Title and Year */}
                <h3 className="font-serif text-2xl text-primary-900 leading-tight">{item.title}</h3>

                <div className="h-px bg-primary-200 my-3"></div>

                {/* Details Grid */}
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-primary-600">Year</span>
                    <span className="text-primary-900">{item.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-600">Medium</span>
                    <span className="text-primary-900">{item.medium}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-600">Size</span>
                    <span className="text-primary-900">{item.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-600">Series</span>
                    <span className="text-primary-900 italic">{item.series}</span>
                  </div>
                </div>

                <div className="h-px bg-primary-200 my-3"></div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => openLightbox(index)}
                    className="flex-1 px-4 py-2 border-2 border-primary-300 hover:border-primary-900 text-primary-900 transition-colors duration-300 text-sm font-medium"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => openEnquiry(item)}
                    className="flex-1 px-4 py-2 bg-primary-900 text-primary-50 hover:bg-primary-800 transition-colors duration-300 text-sm font-medium"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-primary-600">No artworks found in this category.</p>
          </div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Interested in a piece?
          </h3>
          <p className="text-lg text-primary-700 mb-8 max-w-2xl mx-auto">
            Each artwork is available for purchase or commission. Get in touch to discuss pricing, shipping, or create a custom piece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary-900 text-primary-50 hover:bg-primary-800 transition-all duration-300 font-medium"
            >
              Contact Artist
            </a>
            <a
              href="/"
              className="px-8 py-3 border-2 border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-primary-50 transition-all duration-300 font-medium"
            >
              Back to Home
            </a>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentImage}
        slides={filteredItems.map(item => ({ src: item.src }))}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 100,
          pinchZoomDistanceFactor: 100,
          scrollToZoom: true
        }}
        styles={{
          container: {
            backgroundColor: "rgba(45, 40, 32, 0.95)"
          },
          navigationNext: { cursor: "pointer" },
          navigationPrev: { cursor: "pointer" },
          button: { cursor: "pointer" },
        }}
        on={{
          view: ({ index }) => {
            // Force cursor update when image changes
            if (typeof document !== 'undefined') {
              const slides = document.querySelectorAll('.yarl__slide');
              slides.forEach((slide) => {
                const img = slide.querySelector('img');
                if (img) {
                  img.style.cursor = 'inherit';
                }
              });
            }
          },
        }}
        render={{
          buttonPrev: filteredItems.length <= 1 ? () => null : undefined,
          buttonNext: filteredItems.length <= 1 ? () => null : undefined,
        }}
      />

      {/* Zoom Instructions Overlay */}
      <AnimatePresence>
        {showZoomInstructions && open && (
          <motion.div
            key="zoom-instructions-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-24 left-1/2 transform -translate-x-1/2"
            style={{ zIndex: 2147483647, pointerEvents: 'none' }}
          >
            <div className="bg-black/80 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl flex items-center gap-4">
              {/* Scroll Icon + Text */}
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
                <span className="text-sm text-white/90">Scroll</span>
              </div>

              {/* Divider */}
              <div className="w-px h-4 bg-white/30"></div>

              {/* Double-click Icon + Text */}
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                <span className="text-sm text-white/90">Double-click to zoom in</span>
              </div>

              {/* Divider */}
              <div className="w-px h-4 bg-white/30"></div>

              {/* Drag Icon + Text */}
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
                <span className="text-sm text-white/90">Drag</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enquiry Modal */}
      {enquiryModalOpen && selectedArtwork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-900/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-primary-50 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 bg-primary-50 border-b-2 border-primary-300 p-6 flex justify-between items-center">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-900">Enquiry Form</h2>
              <button
                onClick={() => setEnquiryModalOpen(false)}
                className="w-10 h-10 flex items-center justify-center hover:bg-primary-100 transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              {/* Artwork Info */}
              <div className="flex gap-4 mb-8 p-4 bg-primary-100 border border-primary-200">
                <div className="relative w-24 h-32 flex-shrink-0">
                  <Image
                    src={selectedArtwork.src}
                    alt={selectedArtwork.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 text-sm space-y-1">
                  <p className="font-serif text-lg text-primary-900 font-semibold">{selectedArtwork.title}</p>
                  <p className="text-primary-700">{selectedArtwork.year}</p>
                  <p className="text-primary-600">{selectedArtwork.medium}</p>
                  <p className="text-primary-600">{selectedArtwork.size}</p>
                  <p className="text-primary-600 italic">{selectedArtwork.series}</p>
                </div>
              </div>

              {/* Form */}
              <form
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
                className="space-y-6"
              >
                {/* Hidden field for artwork */}
                <input type="hidden" name="artwork" value={`${selectedArtwork.title} (${selectedArtwork.year})`} />

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm tracking-widest text-primary-600 font-serif mb-2">
                    NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-primary-300 focus:border-primary-900 focus:outline-none transition-colors text-primary-900"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm tracking-widest text-primary-600 font-serif mb-2">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-primary-300 focus:border-primary-900 focus:outline-none transition-colors text-primary-900"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm tracking-widest text-primary-600 font-serif mb-2">
                    PHONE
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-white border-2 border-primary-300 focus:border-primary-900 focus:outline-none transition-colors text-primary-900"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm tracking-widest text-primary-600 font-serif mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white border-2 border-primary-300 focus:border-primary-900 focus:outline-none transition-colors text-primary-900 resize-none"
                    placeholder="Tell us about your interest in this artwork..."
                  ></textarea>
                </div>

                {/* Newsletter */}
                <div className="flex items-start gap-3">
                  <div className="flex items-center h-6">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      className="w-4 h-4 border-2 border-primary-300 focus:ring-primary-900"
                    />
                  </div>
                  <label htmlFor="newsletter" className="text-sm text-primary-700">
                    Receive newsletters about new works and exhibitions
                  </label>
                </div>

                {/* Privacy Policy */}
                <div className="flex items-start gap-3">
                  <div className="flex items-center h-6">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      className="w-4 h-4 border-2 border-primary-300 focus:ring-primary-900"
                    />
                  </div>
                  <label htmlFor="privacy" className="text-sm text-primary-700">
                    I agree to the <a href="#" className="underline hover:text-primary-900">Privacy Policy</a> *
                  </label>
                </div>

                <p className="text-xs text-primary-600">* denotes required fields</p>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-primary-900 text-primary-50 hover:bg-primary-800 transition-colors duration-300 font-medium tracking-wider"
                >
                  SUBMIT ENQUIRY
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
