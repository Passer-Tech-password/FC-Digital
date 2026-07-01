"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="glass-soft rounded-3xl border border-border-100 overflow-hidden">
                <div className="aspect-[4/5] bg-gradient-to-br from-card-700 via-card-800 to-background-950">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=800&auto=format&fit=crop')] bg-center bg-cover" />
                </div>
              </div>
              {/* Floating Stat Card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-4 glass-soft rounded-2xl border border-border-100 p-6 shadow-soft-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center text-primary-50 shadow-glow-orange-sm">
                    <TrendingUp size={28} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm text-text-secondary">Customer Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <span className="text-primary-500 text-xs font-semibold uppercase tracking-[0.25em] mb-4 block">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              We Provide The Best <span className="gradient-text">ICT Solutions</span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl">
              FC DIGITAL Technologies is a leading ICT company based in Lagos, Nigeria. With over 10 years of experience, we are committed to delivering innovative, reliable, and affordable technology solutions to businesses and individuals.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "Quality & Reliability",
                "Affordable Pricing",
                "Fast & Secure Support",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={16} className="text-primary-500" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/about">
              <Button size="xl" variant="outline">
                Learn More About Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
