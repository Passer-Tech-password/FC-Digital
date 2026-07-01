import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductsSection from "@/components/home/ProductsSection";

const ProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Our <span className="text-primary">Products</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Quality computers, accessories and more at competitive prices.
            </p>
          </div>
          <ProductsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
