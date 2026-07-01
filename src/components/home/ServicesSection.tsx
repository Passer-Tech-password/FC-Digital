"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Laptop,
  Network,
  Camera,
  HardDrive,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const services: Service[] = [
  {
    id: "computer-sales",
    title: "Computer Sales",
    description: "We sell high quality laptops, desktops and accessories",
    icon: ShoppingBag,
  },
  {
    id: "repairs",
    title: "Repairs & Maintenance",
    description: "We repair and maintain all laptop and desktop models",
    icon: Laptop,
  },
  {
    id: "networking",
    title: "Networking",
    description: "LAN, WAN, Wi-Fi setup, network security & more",
    icon: Network,
  },
  {
    id: "software",
    title: "Software Installation",
    description: "OS installation, software setup and updates",
    icon: HardDrive,
  },
  {
    id: "cctv",
    title: "CCTV Installation",
    description: "We install and configure CCTV systems for homes and offices",
    icon: Camera,
  },
  {
    id: "consultancy",
    title: "ICT Consultancy",
    description: "We provide expert ICT solutions and advice for your business",
    icon: BookOpen,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our Core Services
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Professional solutions tailored to meet your ICT needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="h-full glass-soft rounded-3xl border border-border-100 p-8 hover:border-primary-500/20 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-primary-500/10 text-primary-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link href="/services">
                  <Button variant="ghost" className="p-0 h-auto text-primary-400 hover:text-primary-300">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
