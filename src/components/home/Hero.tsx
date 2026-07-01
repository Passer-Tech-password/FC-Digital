"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
  Star,
  Users,
  HeadphonesIcon,
  Trophy,
} from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary-500/15 rounded-full blur-[150px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(255,106,0,0.08),transparent_55%]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-soft border border-border-100 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-xs font-semibold text-primary-400 uppercase tracking-[0.25em]">
                Welcome to FC DIGITAL TECHNOLOGIES
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] font-bold leading-[1.05] tracking-tight mb-6">
              Your Trusted ICT Partner
              <br />
              <span className="gradient-text">
                For A Digital Tomorrow
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-10 max-w-lg">
              We provide top-notch ICT solutions including computer sales, repairs, networking, software installation and more. Quality service, affordable prices.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="xl" className="shadow-glow-orange">
                Explore Services
                <ArrowRight size={20} />
              </Button>
              <Button size="xl" variant="outline">
                <Phone size={20} />
                Contact Us
              </Button>
            </div>

            {/* Trusted By */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background-950 bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center text-xs font-bold"
                  >
                    👤
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-primary-500 fill-current" />
                  <Star size={16} className="text-primary-500 fill-current" />
                  <Star size={16} className="text-primary-500 fill-current" />
                  <Star size={16} className="text-primary-500 fill-current" />
                  <Star size={16} className="text-primary-500 fill-current" />
                </div>
                <p className="text-sm text-text-secondary">Trusted by businesses & individuals</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Premium Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-6"
          >
              <div className="relative">
                {/* Glowing Ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border-2 border-primary-500/30 rounded-full animate-spin" style={{ animationDuration: '30s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] border-2 border-primary-500/20 rounded-full animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />

                {/* Main Laptop Image Container */}
                <div className="relative glass-soft rounded-3xl border border-border-100 p-8 lg:p-10 shadow-soft-xl">
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-card-700 via-card-800 to-background-950 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603302576837-37569b49473f?w=800&auto=format&fit=crop')] bg-center bg-cover opacity-90" />
                    <div className="relative z-10 text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-2xl gradient-primary flex items-center justify-center shadow-glow-orange animate-float">
                        <div className="text-6xl font-bold">FC</div>
                      </div>
                      <div className="text-2xl font-bold mb-1">FC DIGITAL</div>
                      <div className="text-sm text-text-secondary">TECHNOLOGIES</div>
                    </div>
                  </div>
                </div>

                {/* Floating Contact Cards */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-8 -right-4 lg:right-0 glass-soft rounded-2xl border border-border-100 p-5 shadow-soft-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-text-tertiary uppercase tracking-wide mb-0.5">Call Us</p>
                      <p className="text-sm font-semibold">+234 803 123 4567</p>
                      <p className="text-sm font-semibold">+234 703 987 6543</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 lg:left-0 glass-soft rounded-2xl border border-border-100 p-5 shadow-soft-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-text-tertiary uppercase tracking-wide mb-0.5">Email Us</p>
                      <p className="text-sm font-semibold">info@fcdigital.com</p>
                      <p className="text-sm font-semibold">support@fcdigital.com</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <div className="glass-soft rounded-3xl border border-border-100 p-6 lg:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { icon: Users, value: "500+", label: "Happy Clients" },
                { icon: Trophy, value: "10+", label: "Years Experience" },
                { icon: CheckCircle2, value: "1000+", label: "Projects Completed" },
                { icon: HeadphonesIcon, value: "24/7", label: "Customer Support" },
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-4 lg:gap-6">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center">
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold">{stat.value}</div>
                    <div className="text-sm text-text-secondary">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
