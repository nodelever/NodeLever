import React from 'react';
import { X } from 'lucide-react';
import { useProfileStore } from '../store/useProfileStore';

export const LegalAgreementModal = () => {
  // Pull what we need directly from the store
  const loading = useProfileStore((state) => state.loading);
  const handleLegalAgree = useProfileStore((state) => state.handleLegalAgree);
  const setShowLegalModal = useProfileStore((state) => state.setShowLegalModal);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col border border-white/10">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white">Legal Agreement</h2>
          <button 
            onClick={() => setShowLegalModal(false)} // Use store action
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      
      <div className="p-6 overflow-y-auto flex-1">
        <div className="prose prose-invert max-w-none text-gray-300 space-y-4">
          <h3 className="text-xl font-semibold text-white">Terms and Conditions</h3>
          <p>By using this service, you agree to be bound by the following terms and conditions. Please read them carefully before proceeding.</p>
          
          <h4 className="text-lg font-semibold text-white mt-6">1. Acceptance of Terms</h4>
          <p>By accessing and using this platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, you should not use this service.</p>
          
          <h4 className="text-lg font-semibold text-white mt-6">2. Privacy Policy</h4>
          <p>We respect your privacy and are committed to protecting your personal data. We will use your information in accordance with our Privacy Policy, which is incorporated into these terms by reference.</p>
          
          <h4 className="text-lg font-semibold text-white mt-6">3. User Responsibilities</h4>
          <p>You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>
          
          <h4 className="text-lg font-semibold text-white mt-6">4. Data Usage</h4>
          <p>We collect and process your personal information to provide our services. This includes your name, email, contact information, and any documents you upload. Your data will be stored securely and used only for the purposes outlined in our Privacy Policy.</p>
          
          <h4 className="text-lg font-semibold text-white mt-6">5. Termination</h4>
          <p>We reserve the right to terminate or suspend your account at any time, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
          
          <div className="mt-8 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
            <p className="text-sm text-purple-200">
              By clicking "I Agree", you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
        <div className="p-6 border-t border-white/10 flex gap-4">
          <button
            onClick={() => setShowLegalModal(false)} // Use store action
            className="flex-1 bg-white/5 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-all font-medium border border-white/10"
          >
            Cancel
          </button>
          <button
            onClick={handleLegalAgree} // Use store action
            disabled={loading}
            className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Processing...' : 'I Agree'}
          </button>
        </div>
      </div>
    </div>
  );
};