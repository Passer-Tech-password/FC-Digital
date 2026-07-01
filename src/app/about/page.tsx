import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckCircle2, Users, Award, TrendingUp } from "lucide-react";

const AboutPage: React.FC = () => {
  const stats = [
    { label: "Happy Clients", value: "500+", icon: <Users size={24} /> },
    { label: "Years Experience", value: "10+", icon: <Award size={24} /> },
    { label: "Projects Completed", value: "1000+", icon: <TrendingUp size={24} /> },
    { label: "Team Members", value: "20+", icon: <Users size={24} /> },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              About <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Learn more about FC DIGITAL TECHNOLOGIES and our mission to provide premium ICT solutions.
            </p>
          </div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Who We Are
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                FC DIGITAL TECHNOLOGIES is a leading ICT company based in Lagos, Nigeria, with over 10 years of experience in providing top-notch technology solutions to businesses and individuals.
              </p>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Our mission is to deliver innovative, reliable, and affordable ICT services that help our clients achieve their goals and stay ahead in the digital age.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-text-secondary">Quality products and services</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-text-secondary">Affordable pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-text-secondary">Fast and reliable service</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-text-secondary">24/7 customer support</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-border flex items-center justify-center">
                <div className="text-9xl">🏢</div>
              </div>
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">10+</p>
                    <p className="text-text-secondary">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
