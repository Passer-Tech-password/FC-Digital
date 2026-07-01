"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3"
          : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-soft rounded-2xl border border-border-100 px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl gradient-primary shadow-glow-orange-sm flex items-center justify-center font-bold text-xl transition-all duration-300 group-hover:shadow-glow-orange">
              FC
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight tracking-tight">
                FC DIGITAL
              </span>
              <span className="text-[11px] text-text-tertiary uppercase tracking-[0.2em]">
                TECHNOLOGIES
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <div className="h-6 w-px bg-border-100" />
            <Button size="lg" className="shadow-glow-orange-sm">
              <Phone size={18} />
              Get Support
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-11 h-11 rounded-xl bg-card-500/50 border border-border-100 flex items-center justify-center text-white hover:bg-card-500 transition-all"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="glass-soft rounded-2xl border border-border-100 p-6">
              <div className="flex flex-col gap-2 mb-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-3 px-4 rounded-xl text-text-secondary hover:text-white hover:bg-card-500/50 transition-all"
                  >
                    <span className="font-medium">{link.label}</span>
                    <ChevronRight size={18} className="text-text-tertiary" />
                  </Link>
                ))}
              </div>
              <Button className="w-full shadow-glow-orange-sm">
                <Phone size={18} />
                Get Support
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
