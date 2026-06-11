"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const categories = [
  {
    title: "Handmade Pouches",
    image: "/images/handmade-pouches.jpg",
    description: "Eco-friendly fabric pouches for your daily essentials.",
  },
  {
    title: "Denim Wallets",
    image: "/images/denim-wallets.png",
    description: "Upcycled denim crafted into durable and stylish wallets.",
  },
  {
    title: "Tote Bags",
    image: "/images/tote-bags.png",
    description: "Spacious and sturdy tote bags for every occasion.",
  },
  {
    title: "Hand Pouch",
    image: "/images/hand-pouch.png",
    description: "Beautifully patterned hand pouches crafted with traditional tribal art.",
  },
  {
    title: "Handbags",
    image: "/images/handbags.jpg",
    description: "Premium handcrafted bags with elegant patterns.",
  },
  {
    title: "Custom Orders",
    image: "/images/custom-orders-new.png",
    description: "Personalized products made to your exact specifications.",
  },
];

export default function Products() {
  return (
    <section id="collection" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-primary font-semibold tracking-wider uppercase text-sm mb-2"
          >
            Our Collection
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-foreground"
          >
            Explore The Craftsmanship
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 relative">
                <h4 className="text-xl font-bold text-foreground mb-2 font-serif">
                  {category.title}
                </h4>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                  {category.description}
                </p>
                <a
                  href="https://wa.me/918300716991"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-medium hover:text-purple-800 transition-colors"
                >
                  Order Now <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
