'use client';

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import ImageWithSkeleton from "./ImageWithSkeleton";

const artworks = [
  { id: 1, src: "/TVY6078.jpg", alt: "Artwork 1", aspectRatio: 3/4 },
  { id: 2, src: "/TVY6064.jpg", alt: "Artwork 2", aspectRatio: 3/4 },
  { id: 3, src: "/TVY6085.jpg", alt: "Artwork 3", aspectRatio: 4/5 },
  { id: 4, src: "/TVY6086.jpg", alt: "Artwork 4", aspectRatio: 3/4 },
  { id: 5, src: "/TVY6096.jpg", alt: "Artwork 5", aspectRatio: 3/4 },
];

export default function FeaturedPaintingParallax() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchScrollLeft, setTouchScrollLeft] = useState(0);

  // Use motion value for scroll progress to update during drag
  const scrollXProgress = useMotionValue(0);

  // Update scroll progress on scroll events (including during drag)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const updateScrollProgress = () => {
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const progress = scrollWidth > 0 ? container.scrollLeft / scrollWidth : 0;
      scrollXProgress.set(progress);
    };

    // Initial update
    updateScrollProgress();

    // Listen to scroll events
    container.addEventListener('scroll', updateScrollProgress);

    return () => container.removeEventListener('scroll', updateScrollProgress);
  }, [scrollXProgress]);

  // Text opacity - fades out as you scroll horizontally
  const textOpacity = useTransform(scrollXProgress, [0, 0.3], [1, 0]);

  // Vertical offset amount for staggered effect
  const offsetAmount = 120; // pixels to offset

  // Scroll navigation
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
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = 'grabbing';
    scrollContainerRef.current.style.userSelect = 'none';
    scrollContainerRef.current.style.scrollBehavior = 'auto'; // Immediate response during drag
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
      scrollContainerRef.current.style.userSelect = 'auto';
      scrollContainerRef.current.style.scrollBehavior = 'smooth'; // Restore smooth scrolling for buttons
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Direct 2x scrolling - responsive and smooth
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.cursor = 'grab';
        scrollContainerRef.current.style.userSelect = 'auto';
        scrollContainerRef.current.style.scrollBehavior = 'smooth'; // Restore smooth scrolling
      }
    }
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
    return false;
  };

  // Touch event handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setTouchStartX(e.touches[0].pageX);
    setTouchScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    const x = e.touches[0].pageX;
    const walk = (touchStartX - x) * 2;
    scrollContainerRef.current.scrollLeft = touchScrollLeft + walk;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!scrollContainerRef.current) return;

      // Only handle arrow keys when focus is on the section or its children
      if (!sectionRef.current?.contains(document.activeElement)) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        scroll('left');
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        scroll('right');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="sticky top-0 bg-primary-50 min-h-screen flex flex-col justify-start overflow-hidden z-10 pt-24"
      aria-label="Featured artworks gallery"
      tabIndex={0}
      style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}
    >
      <div className="container mx-auto px-4 mb-2">
        <div className="flex justify-between items-center mb-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 leading-tight">
              Selected Works
            </h2>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 flex items-center justify-center border-2 border-primary-300 hover:border-primary-900 text-primary-700 hover:text-primary-900 transition-all duration-300 group"
              aria-label="Scroll to previous artworks"
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
              aria-label="Scroll to next artworks"
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
          transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.4 }}
          className="flex items-center gap-2 text-sm text-primary-600 italic mt-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
          <span>Drag to explore or use arrows</span>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Container */}
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onDragStart={handleDragStart}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className="overflow-x-auto overflow-y-hidden hide-scrollbar"
        role="region"
        aria-label="Scrollable gallery of artworks"
        style={{
          cursor: 'grab',
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          userSelect: 'none',
          overflowY: 'hidden',
        }}
      >
        <div
          className="flex gap-8 md:gap-12 pl-[20%] md:pl-[28%] pr-[5%] md:pr-[10%] pt-32 pb-4 min-w-max items-start"
          style={{
            userSelect: 'none',
          } as React.CSSProperties}
        >
          {/* Contemporary Art Text - First element in scroll */}
          <motion.div
            style={{
              opacity: textOpacity,
              minHeight: 'min(750px, 82vh)',
            }}
            className="flex-shrink-0 flex items-start justify-start pointer-events-none -ml-[8%] md:-ml-[10%] pt-32"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2,
            }}
          >
            <h2 className="font-serif text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-900 leading-[0.9] tracking-tight whitespace-nowrap">
              CONTEMPORARY
              <br />
              ABSTRACT
              <br />
              ART
            </h2>
          </motion.div>

          {artworks.map((artwork, index) => {
            // Odd images (index 0, 2, 4) start shifted UP
            // Even images (index 1, 3) start shifted DOWN
            const isOdd = index % 2 === 0;
            const initialOffset = isOdd ? -offsetAmount : offsetAmount;

            // Transform: move from initial offset to 0 (aligned at top) as you scroll horizontally
            const yOffset = useTransform(
              scrollXProgress,
              [0, 0.35],
              [initialOffset, 0]
            );

            return (
              <React.Fragment key={`artwork-${artwork.id}`}>
              <motion.div
                style={{ y: yOffset }}
                className="flex-shrink-0 flex flex-col gap-6 relative"
                initial={{ opacity: 0, scale: 0.9, y: initialOffset }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  mass: 0.8,
                  delay: index * 0.08,
                }}
                onDragStart={(e) => e.preventDefault()}
              >
                <div
                  className="relative"
                  draggable={false}
                  style={{
                    width: 'auto',
                    maxWidth: 'min(550px, 80vw)',
                    minWidth: '320px',
                    height: 'auto',
                    maxHeight: 'min(750px, 82vh)',
                    minHeight: '480px',
                    aspectRatio: artwork.aspectRatio.toString(),
                    filter: 'drop-shadow(0 25px 50px rgba(45, 40, 32, 0.2))',
                    userSelect: 'none',
                  } as React.CSSProperties}
                >
                  <ImageWithSkeleton
                    src={artwork.src}
                    alt={artwork.alt}
                    fill
                    sizes="(max-width: 768px) 75vw, 450px"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    priority={index === 0}
                    className="object-cover transition-transform duration-700"
                    draggable={false}
                    unselectable="on"
                    style={{
                      pointerEvents: 'none',
                      userSelect: 'none',
                    } as React.CSSProperties}
                  />
                </div>

                {/* Caption */}
                <div
                  className="mt-6"
                  onMouseDown={(e) => e.stopPropagation()}
                >
                  <h3 className="font-serif text-xl text-primary-900 mb-2">{artwork.alt}</h3>
                  <p className="text-sm text-primary-600">Mixed Media, 2026</p>
                </div>
              </motion.div>
              </React.Fragment>
            );
          })}

          {/* View All Works Card */}
          <motion.a
            href="/galleries"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: artworks.length * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{ scale: 1.02 }}
            onMouseDown={(e) => e.stopPropagation()}
            aria-label="View all artworks in the gallery"
            className="flex-shrink-0 flex items-center justify-center bg-primary-100/50 backdrop-blur-sm hover:bg-primary-200/50 transition-all duration-500 group cursor-pointer border-2 border-primary-200/50"
            style={{
              width: '350px',
              height: '450px',
              filter: 'drop-shadow(0 25px 50px rgba(45, 40, 32, 0.1))',
              pointerEvents: 'auto',
            }}
          >
            <div className="text-center px-8">
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-6 leading-tight">
                View All
                <br />
                Works
              </h3>
              <div className="inline-flex items-center gap-2 text-primary-700 font-medium group-hover:gap-4 transition-all duration-300">
                <span className="border-b-2 border-primary-700">Explore Gallery</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
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
          </motion.a>
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
        .hide-scrollbar::-webkit-scrollbar {
          height: 8px;
        }

        .hide-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .hide-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(157, 140, 112, 0.3);
          border-radius: 4px;
          transition: background 0.3s ease;
        }

        .hide-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(157, 140, 112, 0.5);
        }

        .hide-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(157, 140, 112, 0.3) transparent;
        }
      `}</style>
    </section>
  );
}
