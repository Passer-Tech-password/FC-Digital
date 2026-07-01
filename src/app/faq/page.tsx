"use client";
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of ICT services including computer sales, laptop and desktop repairs, networking, CCTV installation, software installation, hardware repairs, printer repairs, graphic design, website development, cyber security, and ICT consultancy.",
    },
    {
      question: "Do you offer warranty on your products?",
      answer: "Yes, all our products come with a manufacturer's warranty. The duration varies depending on the product and brand.",
    },
    {
      question: "How long does a typical repair take?",
      answer: "Most repairs are completed within 24-48 hours. However, the exact time depends on the issue and availability of parts.",
    },
    {
      question: "Do you offer on-site services?",
      answer: "Yes, we offer on-site services for businesses and homes within Lagos and surrounding areas.",
    },
    {
      question: "What are your payment options?",
      answer: "We accept cash, bank transfers, and card payments. We also offer installment payment plans for selected products.",
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our customer support via phone, email, WhatsApp, or by visiting our office during business hours.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Find answers to common questions about our products and services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-primary" size={24} />
                  ) : (
                    <ChevronDown className="text-primary" size={24} />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 text-text-secondary">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
