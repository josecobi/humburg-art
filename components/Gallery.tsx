'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Gallery data
const galleryItems = [
  { id: 1, category: "painting", src: "/TVY6064.jpg", title: "Abstract Horizon", year: "2024", medium: "Acrylic on Canvas", size: "36 x 48 in", series: "Horizon Series" },
  { id: 2, category: "sculpture", src: "/TVY6078.jpg", title: "Earthen Dreams", year: "2024", medium: "Mixed Media", size: "40 x 50 in", series: "Earth Collection" },
  { id: 3, category: "mixed-media", src: "/TVY6085.jpg", title: "Color Symphony", year: "2023", medium: "Acrylic on Canvas", size: "30 x 40 in", series: "Symphony Series" },
  { id: 4, category: "painting", src: "/TVY6086.jpg", title: "Monochrome Flow", year: "2024", medium: "Oil on Canvas", size: "36 x 48 in", series: "Flow Collection" },
  { id: 5, category: "digital", src: "/TVY6096.jpg", title: "Digital Essence", year: "2023", medium: "Digital Print", size: "32 x 42 in", series: "Digital Explorations" },
  { id: 6, category: "sculpture", src: "/TVY6099.jpg", title: "Textured Reality", year: "2024", medium: "Mixed Media", size: "38 x 46 in", series: "Reality Series" },
  { id: 7, category: "mixed-media", src: "/TVY6101.jpg", title: "Organic Forms", year: "2023", medium: "Mixed Media on Canvas", size: "34 x 44 in", series: "Organic Collection" },
  { id: 8, category: "painting", src: "/TVY6102.jpg", title: "Gestural Expression", year: "2024", medium: "Acrylic on Canvas", size: "36 x 48 in", series: "Expression Series" },
];

const categories = ["all", "painting", "sculpture", "mixed-media", "digital"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = selectedCategory === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setOpen(true);
  };

  const openEnquiry = (artwork: typeof galleryItems[0]) => {
    setSelectedArtwork(artwork);
    setEnquiryModalOpen(true);
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-primary-50">
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
            <span className="text-sm tracking-widest text-primary-600 font-serif">COLLECTION</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6">
            Selected Works
          </h2>
          <p className="text-lg text-primary-700 max-w-2xl">
            Explore a curated collection of contemporary artworks spanning
            various mediums and creative explorations
          </p>
        </motion.div>

        {/* Category Filter */}
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

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center gap-3 text-primary-900 font-medium text-lg hover:gap-5 transition-all duration-300 group border-b-2 border-primary-900 pb-1">
            <span>view archive</span>
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
          </button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentImage}
        slides={filteredItems.map(item => ({ src: item.src }))}
        styles={{
          container: { backgroundColor: "rgba(45, 40, 32, 0.95)" },
        }}
      />

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
