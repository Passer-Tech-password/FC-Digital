import React from "react";
import {
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ];

  const services = [
    "Computer Sales",
    "Laptop Repairs",
    "Desktop Repairs",
    "Networking Solutions",
    "CCTV Installation",
    "Software Solutions",
    "Graphic Design",
    "Website Development",
    "Cyber Security",
    "ICT Consultancy",
  ];

  return (
    <footer className="bg-card-600 border-t border-border-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl gradient-primary shadow-glow-orange-sm flex items-center justify-center font-bold text-xl">
                FC
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight tracking-tight">
                  FC DIGITAL
                </span>
                <span className="text-[11px] text-text-tertiary uppercase tracking-[0.3em]">
                  TECHNOLOGIES
                </span>
              </div>
            </Link>
            <p className="text-text-secondary leading-relaxed mb-7 max-w-md">
              Your trusted partner for innovative ICT solutions. We deliver premium technology services and products to help your business thrive in the digital age.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-11 h-11 rounded-xl bg-card-500 border border-border-100 flex items-center justify-center text-text-secondary hover:bg-primary-500/10 hover:text-primary-500 hover:border-primary-500/20 transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center text-text-secondary hover:text-primary-400 transition-colors duration-300 group"
                  >
                    <span>{link.label}</span>
                    <ChevronRight
                      size={14}
                      className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="flex items-center text-text-secondary hover:text-primary-400 transition-colors duration-300 group"
                  >
                    <span>{service}</span>
                    <ChevronRight
                      size={14}
                      className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-text-tertiary uppercase tracking-wide mb-1">
                    Phone
                  </p>
                  <p className="text-text-secondary">+234 813 103 9852</p>
                    <p className="text-text-secondary">+234 906 143 6442</p>
                    <p className="text-text-secondary">+234 703 753 5691</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-text-tertiary uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <p className="text-text-secondary">fcdigitaltechnologies@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs text-text-tertiary uppercase tracking-wide mb-1">
                    Hours
                  </p>
                  <p className="text-text-secondary">Mon - Sat: 8AM - 6PM</p>
                  <p className="text-text-secondary">Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-text-tertiary">
            © {new Date().getFullYear()} FC DIGITAL TECHNOLOGIES. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <Link
              href="/privacy"
              className="text-text-tertiary hover:text-primary-400 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-text-tertiary hover:text-primary-400 transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
