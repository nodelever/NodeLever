import React, { useEffect } from 'react';
import { Shield, Lock, Eye, Server } from 'lucide-react';

export default function PrivacyPolicyPage() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black relative py-32 px-6">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-purple-900/20 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-purple-500/20">
            <Shield className="w-8 h-8 text-purple-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-400">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <Eye className="w-6 h-6 text-pink-400" />
              1. Information We Collect
            </h2>
            <p className="mb-4">
              At Langwage Inc, we collect information that you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li><strong>Personal Data:</strong> Name, email address, phone number, and tax compliance forms (e.g., W-9).</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our platform, including access times, pages viewed, and your IP address.</li>
            </ul>
          </section>

          <div className="w-full h-px bg-white/10 my-8" />

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <Server className="w-6 h-6 text-cyan-400" />
              2. How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Provide, maintain, and improve our services.</li>
              <li>Process transactions and send related information, including confirmations and receipts.</li>
              <li>Verify your identity and ensure tax compliance for payouts.</li>
              <li>Send technical notices, updates, security alerts, and support messages.</li>
            </ul>
          </section>

          <div className="w-full h-px bg-white/10 my-8" />

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <Lock className="w-6 h-6 text-purple-400" />
              3. Data Security
            </h2>
            <p>
              We implement industry-standard security measures designed to protect your personal information from unauthorized access, disclosure, alteration, and destruction. Sensitive data, such as tax forms and payment details, are encrypted in transit and at rest. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <div className="w-full h-px bg-white/10 my-8" />

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at: <br/>
              <a href="mailto:privacy@langwage.inc" className="text-purple-400 hover:text-purple-300 transition-colors">privacy@langwage.inc</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}