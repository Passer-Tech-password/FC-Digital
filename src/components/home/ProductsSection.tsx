"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Eye, MessageCircle, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: string;
  title: string;
  category: string;
  price: string;
  featured: boolean;
  available: boolean;
  image: string;
}

const products: Product[] = [
  {
    id: "1",
    title: "HP EliteBook 840 G7",
    category: "Laptops",
    price: "₦450,000",
    featured: true,
    available: true,
    image: "https://images.unsplash.com/photo-1588872657475-77a405619648?w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Dell Latitude 7430",
    category: "Laptops",
    price: "₦380,000",
    featured: false,
    available: true,
    image: "https://images.unsplash.com/photo-1603302576837-37569b49473f?w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "TP-Link Archer C6 Router",
    category: "Accessories",
    price: "₦35,000",
    featured: false,
    available: true,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Kingston 1TB SSD",
    category: "Storage",
    price: "₦60,000",
    featured: true,
    available: true,
    image: "https://images.unsplash.com/photo-1591799264318-2e1b87f330a5?w=800&auto=format&fit=crop",
  },
];

const ProductsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-card-700/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,106,0,0.06),transparent_55%]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <span className="text-primary-500 text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">
              Our Products
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-text-secondary max-w-2xl text-lg">
              Quality products at the best prices
            </p>
          </div>
          <Link href="/products">
            <Button size="lg" variant="outline" className="mt-6 lg:mt-0">
              View All Products
              <ChevronRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="h-full glass-soft rounded-3xl border border-border-100 overflow-hidden">
                {/* Product Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {product.featured && (
                    <div className="absolute top-5 left-5 px-4 py-2 gradient-primary rounded-full text-xs font-semibold shadow-glow-orange-sm z-10">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-card-600 via-card-700 to-background-950">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <Button size="icon" variant="secondary" className="w-12 h-12">
                      <Eye size={20} />
                    </Button>
                    <Button size="icon" variant="secondary" className="w-12 h-12">
                      <MessageCircle size={20} />
                    </Button>
                    <Button size="icon" className="w-12 h-12 shadow-glow-orange-sm">
                      <ShoppingCart size={20} />
                    </Button>
                  </div>
                </div>
                {/* Product Info */}
                <div className="p-7">
                  <span className="text-primary-400 text-xs font-semibold uppercase tracking-wider mb-2 block">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-bold mb-3">{product.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold gradient-text">
                      {product.price}
                    </div>
                    {product.available ? (
                      <div className="flex items-center gap-1.5 text-emerald-400">
                        <CheckCircle2 size={16} />
                        <span className="text-xs font-medium">In Stock</span>
                      </div>
                    ) : (
                      <span className="text-red-400 text-xs font-medium">Out of Stock</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
