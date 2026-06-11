"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  "/images/gallery-1.png",
  "/images/gallery-2.png",
  "/images/gallery-3.png",
  "/images/gallery-4.png",
  "/images/gallery-5.png",
  "/images/gallery-6.png",
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Disable background scrolling when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  // Keyboard controls for lightbox navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm mb-2"
          >
            Gallery
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-foreground"
          >
            A Glimpse of Our Craft
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden group shadow-md cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white border border-white px-4 py-2 rounded-full uppercase tracking-widest text-xs font-semibold backdrop-blur-sm">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md cursor-zoom-out select-none"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer focus:outline-none"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Controls */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer focus:outline-none z-55"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer focus:outline-none z-55"
              aria-label="Next Image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Active Image */}
            <div 
              className="relative max-w-[90vw] max-h-[80vh] aspect-square md:aspect-video flex items-center justify-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={selectedIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                className="relative w-[85vw] h-[75vh] max-w-4xl max-h-[75vh]"
              >
                <Image
                  src={galleryImages[selectedIndex]}
                  alt={`Active gallery image ${selectedIndex + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>

            {/* Image Counter & Caption */}
            <div className="absolute bottom-6 text-center text-white/70 text-sm font-medium tracking-wide">
              Image {selectedIndex + 1} of {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
