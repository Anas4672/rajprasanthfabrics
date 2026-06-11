"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, email, message } = form;
    if (!firstName || !message) return;
    const text = `Hi, I'm ${firstName} ${lastName}${email ? ` (${email})` : ""}.\n\n${message}`;
    window.open(`https://wa.me/918300716991?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm mb-2"
          >
            Get In Touch
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-foreground"
          >
            Contact Raj Prasanth
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass p-8 rounded-3xl space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Visit Us</h4>
                  <p className="text-gray-600">
                    Vijayapuram 3rd Street,<br />
                    Chinnasalem, Kallakurichi,<br />
                    Tamil Nadu - 606201, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  <a href="tel:+918300716991" className="text-gray-600 hover:text-primary transition-colors">
                    +91 8300716991
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                  <a href="mailto:rajprasanth907@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
                    rajprasanth907@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 flex gap-4">
                <a
                  href="https://wa.me/918300716991"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl flex items-center justify-center font-medium transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
                <a
                  href="https://instagram.com/rajprasanth7991"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 text-white py-3 rounded-xl flex items-center justify-center font-medium transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input
                    type="text"
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-purple-700 text-white font-medium py-4 rounded-xl transition-colors shadow-lg shadow-purple-500/30"
              >
                Send Message via WhatsApp
              </button>
            </form>

            <div className="h-64 w-full rounded-3xl overflow-hidden glass p-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15651.966961421443!2d78.8687783!3d11.6240212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab6e8f49ecbd6d%3A0xb30e3bb4442cc8e2!2sChinnasalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709643440000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "1.5rem" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Raj Prasanth Location Map"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
