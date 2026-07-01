import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";

const BlogPage: React.FC = () => {
  const posts = [
    {
      id: "1",
      title: "Top 10 Cybersecurity Tips for Businesses in 2025",
      excerpt: "Essential cybersecurity practices to protect your business from digital threats.",
      category: "Cybersecurity",
      author: "John Doe",
      date: "Jan 15, 2025",
      featured: true,
    },
    {
      id: "2",
      title: "How to Choose the Right Laptop for Your Needs",
      excerpt: "A comprehensive guide to help you select the perfect laptop for work or personal use.",
      category: "Buying Guides",
      author: "Jane Smith",
      date: "Jan 10, 2025",
      featured: false,
    },
    {
      id: "3",
      title: "The Future of Networking: What to Expect in 2025",
      excerpt: "Exploring upcoming trends in networking technology and how they will impact businesses.",
      category: "Technology",
      author: "Mike Johnson",
      date: "Jan 5, 2025",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Latest news, tips, and insights from FC DIGITAL TECHNOLOGIES.
            </p>
          </div>

          {/* Featured Post */}
          {posts.filter((p) => p.featured).map((post) => (
            <div
              key={post.id}
              className="bg-card border border-border rounded-3xl overflow-hidden mb-12"
            >
              <div className="grid md:grid-cols-2">
                <div className="aspect-video bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center text-8xl">
                  📰
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                    Featured
                  </span>
                  <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
                  <p className="text-text-secondary mb-6">{post.excerpt}</p>
                  <div className="flex items-center gap-6 mb-6 text-sm text-text-secondary">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <Button size="lg" className="bg-primary hover:bg-accent w-fit">
                    Read Article <ArrowRight size={20} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.filter((p) => !p.featured).map((post) => (
              <div
                key={post.id}
                className="bg-card border border-border rounded-2xl overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center text-5xl">
                  📰
                </div>
                <div className="p-6">
                  <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-2 block">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-text-secondary text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-text-secondary">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
