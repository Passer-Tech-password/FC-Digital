import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="space-y-6 text-text-secondary">
            <p>Last updated: January 2025</p>
            
            <h2 className="text-2xl font-bold text-white mt-8">1. Agreement to Terms</h2>
            <p>
              By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">2. Use License</h2>
            <p>
              Permission is granted to temporarily view the materials on FC DIGITAL TECHNOLOGIES&apos;s website for personal, non-commercial use only.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">3. Disclaimer</h2>
            <p>
              The materials on FC DIGITAL TECHNOLOGIES&apos;s website are provided on an &apos;as is&apos; basis. We make no warranties, expressed or implied.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">4. Limitations</h2>
            <p>
              In no event shall FC DIGITAL TECHNOLOGIES be liable for any damages arising out of the use or inability to use the materials on our website.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">5. Revisions</h2>
            <p>
              FC DIGITAL TECHNOLOGIES may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">6. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of Nigeria.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">7. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>Email: info@fcdigital.com</p>
            <p>Phone: +234 803 123 4567</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
