"use client";

import { motion } from "framer-motion";
import { Scissors, Leaf, ShieldCheck, HeartHandshake, Recycle, MapPin } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <Scissors className="w-5 h-5" />,
    image: "/images/features/handmade.png",
    title: "100% Handmade",
    description: "Every stitch is crafted with care using expert tailoring skills.",
  },
  {
    icon: <Leaf className="w-5 h-5" />,
    image: "/images/features/eco_friendly.png",
    title: "Eco-Friendly",
    description: "Sustainable production processes that respect our planet.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    image: "/images/features/premium.png",
    title: "Premium Quality",
    description: "Durable materials ensuring longevity and premium feel.",
  },
  {
    icon: <HeartHandshake className="w-5 h-5" />,
    image: "/images/features/custom.png",
    title: "Custom Orders",
    description: "Personalized service tailored to your exact specifications.",
  },
  {
    icon: <Recycle className="w-5 h-5" />,
    image: "/images/features/recycled.png",
    title: "Recycled Fabrics",
    description: "Giving new life to old materials for zero-waste production.",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    image: "/images/features/made_in_india.png",
    title: "Made in India",
    description: "Proudly crafted in Kallakurichi, Tamil Nadu.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-primary font-semibold tracking-wider uppercase text-sm mb-2"
          >
            Why Choose Us
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-foreground"
          >
            Our Core Values
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="w-full h-48 relative mb-0 rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 -mt-6 relative z-10 shadow-md border-2 border-purple-50">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3 font-serif mt-4">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
