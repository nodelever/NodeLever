import React, { useEffect } from 'react';
import { FileText, AlertTriangle, Scale, CreditCard } from 'lucide-react';

export default function TermsOfServicePage() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black relative py-32 px-6">
      {/* Background Gradients */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-full max-w-3xl h-64 bg-cyan-900/20 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-cyan-500/20">
            <FileText className="w-8 h-8 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-gray-400">Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <Scale className="w-6 h-6 text-purple-400" />
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using Langwage Inc ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service. We reserve the right to modify these terms at any time, and we will notify users of significant changes.
            </p>
          </section>

          <div className="w-full h-px bg-white/10 my-8" />

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-pink-400" />
              2. User Conduct & Responsibilities
            </h2>
            <p className="mb-4">As a user of our platform, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Violate any applicable laws, regulations, or third-party rights.</li>
              <li>Provide false, inaccurate, or misleading information during registration or tax compliance checks.</li>
              <li>Attempt to bypass or compromise our security infrastructure.</li>
            </ul>
          </section>

          <div className="w-full h-px bg-white/10 my-8" />

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-cyan-400" />
              3. Payments and Tax Compliance
            </h2>
            <p>
              To receive payouts through the Langwage platform, users must complete their profile and submit required tax documentation (such as a W-9 form for US residents). You are solely responsible for keeping your payment and tax information accurate and up to date. Langwage Inc reserves the right to withhold payments if required compliance documents are missing or invalid.
            </p>
          </section>

          <div className="w-full h-px bg-white/10 my-8" />

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Termination</h2>
            <p>
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}