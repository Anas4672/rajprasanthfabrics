import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Features />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
