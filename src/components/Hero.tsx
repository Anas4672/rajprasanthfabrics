"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      {/* Background Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            borderRadius: ["30%", "50%", "30%"],
          }}
          transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
          className="absolute top-20 left-10 w-96 h-96 bg-purple-300 mix-blend-multiply filter blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
            borderRadius: ["50%", "20%", "50%"],
          }}
          transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
          className="absolute top-40 right-10 w-96 h-96 bg-purple-200 mix-blend-multiply filter blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 0],
          }}
          transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
          className="absolute -bottom-8 left-1/3 w-96 h-96 bg-purple-400 mix-blend-multiply filter blur-3xl opacity-20 rounded-full"
        />
      </div>

      {/* Hero Bags Image — full background transparent */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero-bags.png"
          alt="Handmade fabric bags collection"
          fill
          className="object-cover mix-blend-multiply opacity-20"
          priority
        />
        {/* Extra gradient overlay so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-block px-4 py-1.5 rounded-full glass-dark text-primary font-medium text-sm tracking-wide"
        >
          Eco-Chic Daily Carry
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight max-w-4xl"
        >
          Handmade Creations <br />
          <span className="text-gradient">Crafted With Passion</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed"
        >
          Premium handmade pouches, wallets, handbags and eco-friendly fabric products made with creativity, craftsmanship and care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#collection"
            className="px-8 py-4 bg-primary text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:bg-purple-700 transition-all duration-300 w-full sm:w-auto transform hover:-translate-y-1"
          >
            View Collection
          </a>
          <a
            href="https://wa.me/918300716991"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-primary border border-purple-200 rounded-full font-medium shadow-lg hover:shadow-xl hover:bg-purple-50 transition-all duration-300 w-full sm:w-auto transform hover:-translate-y-1"
          >
            WhatsApp Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
