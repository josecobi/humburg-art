'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const artworks = [
  { id: 1, src: "/TVY6064.jpg", alt: "Artwork 1", aspectRatio: 3/4 },
  { id: 2, src: "/TVY6078.jpg", alt: "Artwork 2", aspectRatio: 2/3 },
  { id: 3, src: "/TVY6085.jpg", alt: "Artwork 3", aspectRatio: 4/5 },
  { id: 4, src: "/TVY6086.jpg", alt: "Artwork 4", aspectRatio: 3/4 },
  { id: 5, src: "/TVY6096.jpg", alt: "Artwork 5", aspectRatio: 3/4 },
];

export default function FeaturedPainting() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 500;
    const targetScroll = direction === 'left'
      ? scrollContainerRef.current.scrollLeft - scrollAmount
      : scrollContainerRef.current.scrollLeft + scrollAmount;

    scrollContainerRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  // Drag to scroll functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    e.preventDefault(); // Prevent default drag behavior
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = 'grabbing';
    scrollContainerRef.current.style.userSelect = 'none';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
      scrollContainerRef.current.style.userSelect = 'auto';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply for faster scroll
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.cursor = 'grab';
        scrollContainerRef.current.style.userSelect = 'auto';
      }
    }
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
    return false;
  };

  return (
    <section className="relative bg-primary-50 py-20 md:py-32">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex justify-between items-end mb-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="text-sm tracking-widest text-primary-600 font-serif">FEATURED</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight">
              Selected Works
            </h2>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 flex items-center justify-center border-2 border-primary-300 hover:border-primary-900 text-primary-700 hover:text-primary-900 transition-all duration-300 group"
              aria-label="Previous"
            >
              <svg
                className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 flex items-center justify-center border-2 border-primary-300 hover:border-primary-900 text-primary-700 hover:text-primary-900 transition-all duration-300 group"
              aria-label="Next"
            >
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

        {/* Drag Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-2 text-sm text-primary-600 italic"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
          <span>Drag to explore or use arrows</span>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Gallery */}
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onDragStart={handleDragStart}
        className="overflow-x-auto overflow-y-hidden custom-scrollbar"
        style={{
          cursor: 'grab',
          userSelect: 'none',
          WebkitUserDrag: 'none',
        } as React.CSSProperties}
      >
        <div
          className="flex gap-6 md:gap-8 px-4 md:px-8 pb-8 min-w-max"
          style={{
            WebkitUserDrag: 'none',
            userSelect: 'none',
          } as React.CSSProperties}
        >
          {artworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ y: -10 }}
              className="flex-shrink-0 group cursor-pointer"
              onDragStart={(e) => e.preventDefault()}
            >
              <div
                className="relative"
                draggable={false}
                style={{
                  width: 'auto',
                  maxWidth: 'min(650px, 90vw)',
                  minWidth: '400px',
                  height: 'auto',
                  maxHeight: 'min(800px, 85vh)',
                  minHeight: '500px',
                  aspectRatio: artwork.aspectRatio.toString(),
                  filter: 'drop-shadow(0 20px 40px rgba(45, 40, 32, 0.15))',
                  WebkitUserDrag: 'none',
                  userSelect: 'none',
                } as React.CSSProperties}
              >
                <Image
                  src={artwork.src}
                  alt={artwork.alt}
                  fill
                  draggable={false}
                  unselectable="on"
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  style={{
                    pointerEvents: 'none',
                    WebkitUserDrag: 'none',
                    userSelect: 'none',
                  } as React.CSSProperties}
                />
              </div>

              {/* Caption */}
              <div
                className="mt-4"
                style={{ pointerEvents: 'auto' }}
                onMouseDown={(e) => e.stopPropagation()}
              >
                <h3 className="font-serif text-lg text-primary-900 mb-1">{artwork.alt}</h3>
                <p className="text-sm text-primary-600">Mixed Media, 2026</p>
              </div>
            </motion.div>
          ))}

          {/* View All Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: artworks.length * 0.1,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="flex-shrink-0 flex items-center justify-center bg-primary-100 hover:bg-primary-200 transition-colors duration-300 cursor-pointer group"
            style={{
              width: '400px',
              height: '500px',
              filter: 'drop-shadow(0 20px 40px rgba(45, 40, 32, 0.15))',
              pointerEvents: 'auto',
            }}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={() => {
              const gallerySection = document.querySelector('#gallery');
              if (gallerySection) {
                gallerySection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <div className="text-center">
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                View All
                <br />
                Works
              </h3>
              <div className="inline-flex items-center gap-2 text-primary-700 group-hover:gap-4 transition-all duration-300">
                <span className="border-b border-primary-700">Explore Gallery</span>
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
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Hint - Mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="md:hidden mt-8 text-center text-sm text-primary-600"
      >
        ← Swipe to explore →
      </motion.div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(157, 140, 112, 0.1);
          border-radius: 4px;
          margin: 0 16px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(157, 140, 112, 0.4);
          border-radius: 4px;
          transition: background 0.3s ease;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(157, 140, 112, 0.6);
        }

        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(157, 140, 112, 0.4) rgba(157, 140, 112, 0.1);
        }
      `}</style>
    </section>
  );
}
