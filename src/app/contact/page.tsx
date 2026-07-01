"use client";
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAuth } from "@/contexts/AuthContext";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactPage: React.FC = () => {
  const { db } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    if (!db) return;
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "messages"), {
        ...data,
        read: false,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      });
      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Contact <span className="text-primary-500">Us</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Get in touch with us for any inquiries or support.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Get In Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-text-secondary">+234 803 123 4567</p>
                    <p className="text-text-secondary">+234 901 234 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-text-secondary">info@fcdigital.com</p>
                    <p className="text-text-secondary">support@fcdigital.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-text-secondary">123 Tech Plaza, Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-text-secondary">Mon - Sat: 8:00 AM - 6:00 PM</p>
                    <p className="text-text-secondary">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 w-full">
                <MessageCircle size={20} className="mr-2" /> Chat on WhatsApp
              </Button>

              {/* Map Placeholder */}
              <div className="mt-8 aspect-video rounded-2xl bg-card-800 border border-border-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📍</div>
                  <p className="text-text-secondary">Map Location</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card-800 border border-border-100 rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              {submitSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    {...register("name")}
                    className="w-full px-4 py-3 rounded-xl bg-card-700 border border-border-100 text-white focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-2">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full px-4 py-3 rounded-xl bg-card-700 border border-border-100 text-white focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-2">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    {...register("phone")}
                    className="w-full px-4 py-3 rounded-xl bg-card-700 border border-border-100 text-white focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-2">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    {...register("subject")}
                    className="w-full px-4 py-3 rounded-xl bg-card-700 border border-border-100 text-white focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Subject of your message"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-2">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-card-700 border border-border-100 text-white focus:border-primary-500 focus:outline-none transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-2">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary-500 hover:bg-primary-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
