"use client";
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye, CheckCircle2, Filter, Search, SlidersHorizontal, ChevronLeft, ChevronRight, MessageCircle, Truck, Shield, Lock, Zap, ArrowRight, Menu } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Product {
  id: string;
  title: string;
  category: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  featured: boolean;
  available: boolean;
  image: string;
}

const products: Product[] = [
  {
    id: "1",
    title: "HP EliteBook 840 G9",
    category: "Laptops",
    price: "₦450,000",
    oldPrice: "₦500,000",
    badge: "NEW",
    featured: true,
    available: true,
    image: "https://images.unsplash.com/photo-1588872657475-77a405619648?w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Dell Latitude 7430",
    category: "Laptops",
    price: "₦380,000",
    badge: "SALE",
    featured: false,
    available: true,
    image: "https://images.unsplash.com/photo-1603302576837-37569b49473f?w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Asus ROG Strix G15",
    category: "Laptops",
    price: "₦650,000",
    badge: "NEW",
    featured: false,
    available: true,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Lenovo ThinkPad E14",
    category: "Laptops",
    price: "₦280,000",
    oldPrice: "₦320,000",
    badge: "SALE",
    featured: true,
    available: true,
    image: "https://images.unsplash.com/photo-1593642486761-11622895031c?w=800&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "HP ProDesk 400 G7",
    category: "Desktops",
    price: "₦320,000",
    badge: "NEW",
    featured: false,
    available: true,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "TP-Link Archer C6",
    category: "Networking",
    price: "₦35,000",
    badge: "NEW",
    featured: false,
    available: true,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
  },
  {
    id: "7",
    title: "Kingston 1TB SSD",
    category: "Storage",
    price: "₦60,000",
    badge: "NEW",
    featured: true,
    available: true,
    image: "https://images.unsplash.com/photo-1591799264318-2e1b87f330a5?w=800&auto=format&fit=crop",
  },
  {
    id: "8",
    title: "HP LaserJet Pro M15w",
    category: "Printers",
    price: "₦210,000",
    badge: "NEW",
    featured: false,
    available: true,
    image: "https://images.unsplash.com/photo-1625703051444-76645738e737?w=800&auto=format&fit=crop",
  },
  {
    id: "9",
    title: "Samsung 24\" Monitor",
    category: "Accessories",
    price: "₦85,000",
    badge: "NEW",
    featured: false,
    available: true,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop",
  },
  {
    id: "10",
    title: "Logitech K120 Keyboard",
    category: "Accessories",
    price: "₦15,000",
    badge: "NEW",
    featured: false,
    available: true,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop",
  },
  {
    id: "11",
    title: "Logitech M331 Mouse",
    category: "Accessories",
    price: "₦18,000",
    badge: "SALE",
    featured: false,
    available: true,
    image: "https://images.unsplash.com/photo-1615960108139-42703d68566f?w=800&auto=format&fit=crop",
  },
  {
    id: "12",
    title: "Laptop Backpack",
    category: "Accessories",
    price: "₦22,000",
    badge: "NEW",
    featured: false,
    available: true,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop",
  },
];

const categories = [
  { name: "All Products", count: 48 },
  { name: "Laptops", count: 22 },
  { name: "Desktops", count: 9 },
  { name: "Accessories", count: 32 },
  { name: "Networking", count: 8 },
  { name: "Storage", count: 7 },
  { name: "Printers", count: 6 },
];

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200000 });
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <div className="min-h-screen bg-background-950">
      <Navbar />
      <main className="pt-28 pb-16">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-background-900 to-background-950 border-b border-border-100">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <Image src="https://images.unsplash.com/photo-1603302576837-37569b49473f?w=1200&auto=format&fit=crop" alt="Hero" fill className="object-cover" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
              <a href="/" className="hover:text-primary-400 transition-colors">Home</a>
              <span className="text-text-tertiary">•</span>
              <span className="text-white">Products</span>
            </div>

            <div className="relative z-10">
              <h1 className="text-4xl sm:text-5xl font-bold mb-3">
                Our <span className="text-primary-500">Products</span>
              </h1>
              <p className="text-lg text-text-secondary max-w-xl">
                High quality computer products, accessories and devices from top brands at the best prices.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-6 flex items-center justify-between">
            <Button onClick={() => setShowMobileFilters(!showMobileFilters)} variant="outline" className="gap-2">
              <Filter size={18} />
              Filters
            </Button>
          </div>

          <div className="flex gap-8">
            {/* Sidebar - Desktop & Mobile Modal */}
            <aside className={`
              ${showMobileFilters ? 'fixed inset-0 z-50 flex' : 'hidden'}
              lg:relative lg:block lg:w-72 lg:flex-shrink-0
            `}>
              {showMobileFilters && (
                <div 
                  className="absolute inset-0 bg-black/60 lg:hidden" 
                  onClick={() => setShowMobileFilters(false)}
                />
              )}
              <div className="
                relative z-10 bg-card-800 w-72 h-full overflow-y-auto p-6
                lg:bg-transparent lg:p-0 lg:h-auto
              ">
                <div className="flex justify-between items-center mb-6 lg:hidden">
                  <h3 className="font-semibold">Filters</h3>
                  <button onClick={() => setShowMobileFilters(false)}>
                    <Menu size={24} />
                  </button>
                </div>
                
                {/* Categories */}
                <div className="mb-8 p-6 bg-card-800 rounded-2xl border border-border-100">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-5 h-5 text-primary-500">
                      <SlidersHorizontal size={20} />
                    </div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider">Categories</h3>
                  </div>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.name}
                        onClick={() => { setSelectedCategory(cat.name); setShowMobileFilters(false); }}
                        className={`
                          w-full flex items-center justify-between py-3 px-4 rounded-lg text-left transition-all
                          ${selectedCategory === cat.name ? 'bg-primary-500/10 text-primary-500 border border-primary-500/20' : 'text-text-secondary hover:text-white hover:bg-card-700'}
                        `}
                      >
                        <span>{cat.name}</span>
                        <span className="text-xs bg-card-700 px-2 py-1 rounded-full">{cat.count}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="p-6 bg-card-800 rounded-2xl border border-border-100">
                  <h3 className="font-semibold text-sm uppercase tracking-wider mb-5">Filter By Price</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-text-tertiary mb-1 block">Min (₦)</label>
                        <input
                          type="number"
                          value={priceRange.min}
                          onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                          className="w-full bg-card-700 border border-border-100 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary-500"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-text-tertiary mb-1 block">Max (₦)</label>
                        <input
                          type="number"
                          value={priceRange.max}
                          onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                          className="w-full bg-card-700 border border-border-100 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary-500"
                        />
                      </div>
                    </div>
                    <Button className="w-full bg-primary-500 hover:bg-primary-600">Apply Filter</Button>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-8 p-6 bg-card-800/50 rounded-2xl border border-primary-500/20 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="text-sm text-text-secondary">100% Original Products</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500">
                      <Shield size={18} />
                    </div>
                    <span className="text-sm text-text-secondary">1 Year Warranty</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500">
                      <Lock size={18} />
                    </div>
                    <span className="text-sm text-text-secondary">Secure Payments</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500">
                      <Zap size={18} />
                    </div>
                    <span className="text-sm text-text-secondary">Fast Delivery</span>
                  </div>
                </div>

                {/* Help Banner */}
                <div className="mt-8 p-6 bg-gradient-to-br from-primary-500/15 to-primary-500/5 rounded-2xl border border-primary-500/30">
                  <h3 className="font-semibold mb-2">Need Help Choosing?</h3>
                  <p className="text-sm text-text-secondary mb-4">
                    Our experts are here to help you find the perfect product!
                  </p>
                  <Button className="w-full bg-primary-500 hover:bg-primary-600 gap-2">
                    Contact Us
                    <ArrowRight size={18} />
                  </Button>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Sort and Info Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <p className="text-sm text-text-secondary">
                  Showing 1–12 of 48 products
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-text-secondary">Sort by:</span>
                    <select className="bg-card-800 border border-border-100 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-primary-500">
                      <option>Latest</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Popular</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 bg-primary-500 rounded-lg text-white">
                      <div className="w-4 h-4 flex flex-wrap gap-0.5">
                        <div className="w-1.5 h-1.5 bg-white rounded-sm" />
                        <div className="w-1.5 h-1.5 bg-white rounded-sm" />
                        <div className="w-1.5 h-1.5 bg-white rounded-sm" />
                        <div className="w-1.5 h-1.5 bg-white rounded-sm" />
                      </div>
                    </button>
                    <button className="p-2 bg-card-800 rounded-lg text-text-secondary hover:bg-card-700">
                      <div className="flex flex-col gap-0.5">
                        <div className="w-4 h-1.5 bg-current rounded-sm" />
                        <div className="w-4 h-1.5 bg-current rounded-sm" />
                        <div className="w-4 h-1.5 bg-current rounded-sm" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                    className="group"
                  >
                    <div className="h-full bg-card-800 rounded-2xl border border-border-100 overflow-hidden flex flex-col">
                      {/* Product Image */}
                      <div className="relative aspect-square overflow-hidden">
                        {product.badge && (
                          <div className={`
                            absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider z-10
                            ${product.badge === "NEW" ? "bg-emerald-500 text-white" : "bg-red-500 text-white"}
                          `}>
                            {product.badge}
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-br from-card-700 to-card-900">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        {/* Hover Actions */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                          <Button size="icon" variant="secondary" className="w-11 h-11 rounded-lg">
                            <Eye size={18} />
                          </Button>
                          <Button size="icon" className="w-11 h-11 rounded-lg bg-primary-500 hover:bg-primary-600">
                            <ShoppingCart size={18} />
                          </Button>
                        </div>
                      </div>
                      {/* Product Info */}
                      <div className="p-5 flex flex-col flex-1">
                        <span className="text-primary-400 text-xs font-semibold uppercase tracking-wider mb-1 block">
                          {product.category}
                        </span>
                        <h3 className="font-bold text-base mb-2 leading-tight group-hover:text-primary-400 transition-colors">
                          {product.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-lg font-bold gradient-text">
                            {product.price}
                          </span>
                          {product.oldPrice && (
                            <span className="text-xs text-text-tertiary line-through">
                              {product.oldPrice}
                            </span>
                          )}
                        </div>
                        <div className="mt-auto flex gap-2">
                          <Button size="sm" variant="outline" className="flex-1">
                            Quick View
                          </Button>
                          <Button size="sm" className="flex-1 bg-primary-500 hover:bg-primary-600">
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex items-center justify-center gap-2">
                <Button size="icon" variant="outline" disabled className="text-text-tertiary">
                  <ChevronLeft size={20} />
                </Button>
                <Button size="sm" className="bg-primary-500 hover:bg-primary-600 w-10 h-10">1</Button>
                <Button size="sm" variant="outline" className="w-10 h-10">2</Button>
                <Button size="sm" variant="outline" className="w-10 h-10">3</Button>
                <Button size="sm" variant="outline" className="w-10 h-10">4</Button>
                <Button size="icon" variant="outline">
                  <ChevronRight size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info Section */}
        <div className="border-t border-border-100 bg-card-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-card-700 flex items-center justify-center text-primary-500 flex-shrink-0">
                  <Headset size={28} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Have Questions?</h4>
                  <p className="text-sm text-text-secondary mb-2">
                    We're here to help!
                  </p>
                  <p className="text-primary-400 font-medium">+234 803 123 4563</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-card-700 flex items-center justify-center text-primary-500 flex-shrink-0">
                  <FileText size={28} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Need Bulk Purchase?</h4>
                  <p className="text-sm text-text-secondary mb-2">
                    Special pricing for businesses!
                  </p>
                  <p className="text-primary-400 font-medium">Request Quote →</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-card-700 flex items-center justify-center text-primary-500 flex-shrink-0">
                  <Truck size={28} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Fast & Secure Delivery</h4>
                  <p className="text-sm text-text-secondary mb-2">
                    Across Nigeria!
                  </p>
                  <p className="text-primary-400 font-medium">Learn More →</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Headset = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 10V12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M7 12C7 10.8954 7.89543 10 9 10H10V16H9C7.89543 16 7 15.1046 7 14V12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M17 12C17 10.8954 16.1046 10 15 10H14V16H15C16.1046 16 17 15.1046 17 14V12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M12 3C15.866 3 19 6.13401 19 10V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const FileText = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M14 3H6C5.46957 3 4.96086 3.21071 4.58579 3.58579C4.21071 3.96086 4 4.46957 4 5V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V9L14 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 3V9H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default ProductsPage;
