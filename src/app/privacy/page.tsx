import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="space-y-6 text-text-secondary">
            <p>Last updated: January 2025</p>
            
            <h2 className="text-2xl font-bold text-white mt-8">1. Introduction</h2>
            <p>
              FC DIGITAL TECHNOLOGIES (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">2. Data We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identity Data: includes first name, last name, username or similar identifier.</li>
              <li>Contact Data: includes email address and telephone numbers.</li>
              <li>Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To register you as a customer.</li>
              <li>To process and deliver your orders.</li>
              <li>To manage our relationship with you.</li>
              <li>To improve our website, products/services, marketing or customer relationships.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">5. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
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

export default PrivacyPage;
