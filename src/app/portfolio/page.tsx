import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const PortfolioPage: React.FC = () => {
  const projects = [
    {
      id: "1",
      title: "TechCorp Office Network",
      category: "Networking",
      image: "🌐",
    },
    {
      id: "2",
      title: "BusinessX Website",
      category: "Web Development",
      image: "💻",
    },
    {
      id: "3",
      title: "StartupZ CCTV Installation",
      category: "Security",
      image: "📷",
    },
    {
      id: "4",
      title: "Enterprise Branding",
      category: "Graphic Design",
      image: "🎨",
    },
    {
      id: "5",
      title: "School Computer Lab",
      category: "Computer Sales",
      image: "🖥️",
    },
    {
      id: "6",
      title: "Hospital Management System",
      category: "Software",
      image: "🏥",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Check out some of our recent projects and success stories.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["All", "Networking", "Web Development", "Security", "Graphic Design", "Computer Sales"].map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full border border-border transition-all ${
                  category === "All" ? "bg-primary border-primary" : "hover:border-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-card border border-border rounded-2xl overflow-hidden group"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center text-7xl group-hover:scale-110 transition-transform">
                  {project.image}
                </div>
                <div className="p-6">
                  <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold">{project.title}</h3>
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

export default PortfolioPage;
