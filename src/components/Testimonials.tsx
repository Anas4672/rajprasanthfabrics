"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Verified Buyer",
    content: "The quality of the denim wallet I received is absolutely outstanding. It feels premium and the stitching is perfect. Highly recommend!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    name: "Anita R.",
    role: "Regular Customer",
    content: "I love that these bags are eco-friendly. The custom tote bag I ordered was exactly what I wanted. Beautiful craftsmanship from Tamil Nadu.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 3,
    name: "Karthik Venkatesh",
    role: "Verified Buyer",
    content: "Bought a handmade pouch as a gift. The attention to detail is remarkable. You can really feel the passion put into making these products.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm mb-2"
          >
            Testimonials
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-foreground"
          >
            What Our Customers Say
          </motion.h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full"
              >
                <div className="glass-dark p-8 md:p-12 rounded-3xl text-center mx-4 md:mx-12">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl font-serif text-foreground mb-8 italic">
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </p>
                  <div className="flex flex-col items-center">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-primary">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-purple-50 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-purple-50 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
