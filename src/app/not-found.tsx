import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center pt-20">
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-xl text-text-secondary mb-8 max-w-md mx-auto">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <Link href="/">
            <Button size="lg" className="bg-primary hover:bg-accent">
              <Home size={20} className="mr-2" /> Go Back Home
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
