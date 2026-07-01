"use client";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Monitor,
  Wrench,
  Wifi,
  Cpu,
  ShieldCheck,
  Headphones,
  Printer,
  Smartphone,
  Globe,
  Palette,
  Lock,
  Download,
  CheckCircle2,
  ArrowRight,
  Phone,
  FileText,
  Users,
} from "lucide-react";

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: "1",
    icon: <Monitor className="w-7 h-7" />,
    title: "Computer Sales",
    description: "High-quality desktops, laptops, and accessories from top brands at competitive prices.",
  },
  {
    id: "2",
    icon: <Wrench className="w-7 h-7" />,
    title: "Repairs & Maintenance",
    description: "Professional repair and maintenance services for laptops, desktops and more.",
  },
  {
    id: "3",
    icon: <Wifi className="w-7 h-7" />,
    title: "Networking",
    description: "LAN, WAN, WiFi Setup, network security and infrastructure solutions.",
  },
  {
    id: "4",
    icon: <Cpu className="w-7 h-7" />,
    title: "Software Installation",
    description: "OS setup, driver installation, and system optimization services.",
  },
  {
    id: "5",
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "CCTV Installation",
    description: "We install and configure CCTV systems for homes, offices, and large premises.",
  },
  {
    id: "6",
    icon: <Headphones className="w-7 h-7" />,
    title: "ICT Consultancy",
    description: "Get expert advice and tailored solutions for all your technology needs.",
  },
  {
    id: "7",
    icon: <Printer className="w-7 h-7" />,
    title: "Printer Repairs",
    description: "Fix and repair all brands and models of printers.",
  },
  {
    id: "8",
    icon: <Smartphone className="w-7 h-7" />,
    title: "Hardware Upgrades",
    description: "Upgrades RAM, SSD, HDD, motherboard, graphics, and more for better performance.",
  },
  {
    id: "9",
    icon: <Globe className="w-7 h-7" />,
    title: "Website Development",
    description: "We build fast, responsive and secure websites that convert.",
  },
  {
    id: "10",
    icon: <Palette className="w-7 h-7" />,
    title: "Graphic Design",
    description: "Creative designs for logos, brand identity, marketing materials and more.",
  },
  {
    id: "11",
    icon: <Lock className="w-7 h-7" />,
    title: "Cyber Security",
    description: "Protect your systems and data with our expert security solutions.",
  },
  {
    id: "12",
    icon: <Download className="w-7 h-7" />,
    title: "Data Recovery",
    description: "We recover lost or deleted data from hard drives, SSDs, and storage devices.",
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-950">
      <Navbar />
      <main className="pt-28 pb-16">
        {/* Hero Section */}
        <div className="relative overflow-hidden border-b border-border-100">
          <div className="absolute inset-0 bg-gradient-to-br from-background-950 via-background-900 to-background-950" />
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&auto=format&fit=crop"
              alt="Services"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-text-secondary mb-8">
              <a href="/" className="hover:text-primary-400 transition-colors">Home</a>
              <span className="text-text-tertiary">•</span>
              <span className="text-white">Services</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                  Our Professional <br />
                  <span className="text-primary-500">ICT Services</span>
                </h1>
                <p className="text-lg text-text-secondary mb-8 max-w-lg">
                  We provide end-to-end technology solutions designed to improve productivity, maximize efficiency and drive growth for your business.
                </p>
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <p className="font-bold">Expert Team</p>
                      <p className="text-xs text-text-tertiary">Professional engineers</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <p className="font-bold">Quality Service</p>
                      <p className="text-xs text-text-tertiary">Satisfaction guaranteed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <p className="font-bold">Fast Response</p>
                      <p className="text-xs text-text-tertiary">24/7 support</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden border border-border-100 shadow-2xl shadow-primary-500/10">
                  <Image
                    src="https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&auto=format&fit=crop"
                    alt="ICT Services"
                    width={600}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-primary-500 text-sm font-semibold uppercase tracking-wider mb-3">
                <span className="w-8 h-[1px] bg-primary-500" />
                What We Offer
                <span className="w-8 h-[1px] bg-primary-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our Core <span className="text-primary-500">Services</span>
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Comprehensive ICT solutions to meet all your business and personal technology needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <div className="h-full bg-card-800 rounded-2xl border border-border-100 p-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-primary-500/10 text-primary-500 flex items-center justify-center mb-5 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-primary-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-text-secondary mb-6">
                      {service.description}
                    </p>
                    <Button variant="outline" size="sm" className="gap-2 group-hover:bg-primary-500 group-hover:border-primary-500 group-hover:text-white transition-all">
                      Learn More
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-card-800/20 border-y border-border-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-primary-500 text-sm font-semibold uppercase tracking-wider mb-3">
                <span className="w-8 h-[1px] bg-primary-500" />
                Our Process
                <span className="w-8 h-[1px] bg-primary-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                How We <span className="text-primary-500">Work</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  num: "01",
                  title: "We Listen to Your Needs",
                  desc: "We assess your requirements and understand your challenges.",
                  icon: <Phone size={24} />
                },
                {
                  num: "02",
                  title: "We Analyze the Problem",
                  desc: "We figure out the best solution tailored to your specific needs.",
                  icon: <FileText size={24} />
                },
                {
                  num: "03",
                  title: "We Execute",
                  desc: "Our experts implement the solution with precision and care.",
                  icon: <Cpu size={24} />
                },
                {
                  num: "04",
                  title: "We Provide Ongoing Support",
                  desc: "We provide ongoing support and maintenance for your peace of mind.",
                  icon: <CheckCircle2 size={24} />
                },
              ].map((step, idx) => (
                <div key={idx} className="relative text-center group">
                  {/* Connector Line */}
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-[1px] bg-gradient-to-r from-primary-500/50 to-transparent" />
                  )}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-card-800 border-2 border-primary-500 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                      {step.icon}
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-5xl font-black text-primary-500/10">
                      {step.num}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-text-secondary">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-primary-500 text-sm font-semibold uppercase tracking-wider mb-3">
                  <span className="w-8 h-[1px] bg-primary-500" />
                  Why Choose Us
                  <span className="w-8 h-[1px] bg-primary-500" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  We Deliver Excellence <br />
                  With Every <span className="text-primary-500">Service</span>
                </h2>
                <p className="text-text-secondary mb-8 max-w-lg">
                  Our mission is to provide top-notch ICT solutions with unmatched quality and customer satisfaction.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Experienced & Certified Professionals",
                    "Affordable Pricing",
                    "Quality & Reliable Services",
                    "24/7 Customer Support",
                    "Fast Turnaround Time"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary-500/20 text-primary-500 flex items-center justify-center">
                        <CheckCircle2 size={14} />
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-primary-500 hover:bg-primary-600 gap-2">
                  Get Free Quote
                  <ArrowRight size={18} />
                </Button>
              </div>

              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden border border-border-100">
                  <Image
                    src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=800&auto=format&fit=crop"
                    alt="Why Choose Us"
                    width={700}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-card-800 rounded-2xl border border-primary-500/30 p-6 shadow-xl shadow-primary-500/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Users size={28} className="text-primary-500" />
                    <div>
                      <p className="text-2xl font-bold">500+</p>
                      <p className="text-sm text-text-secondary">Happy Clients</p>
                    </div>
                  </div>
                  <p className="text-xs text-text-tertiary">
                    Trusted by businesses across Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-gradient-to-r from-primary-500/20 via-primary-500/10 to-primary-500/20 rounded-3xl border border-primary-500/30 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Need ICT Solutions for Your Business?
                  </h3>
                  <p className="text-text-secondary">
                    We are here to help you build, secure, and optimize your digital world.
                  </p>
                </div>
                <Button size="lg" className="bg-primary-500 hover:bg-primary-600 min-w-[180px] gap-2">
                  Talk To An Expert
                  <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
