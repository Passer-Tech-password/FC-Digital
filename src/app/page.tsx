import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import ProductsSection from "@/components/home/ProductsSection";
import AboutSection from "@/components/home/AboutSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <ProductsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
