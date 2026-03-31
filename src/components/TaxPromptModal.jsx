import React from 'react';
import { FileText, X, ArrowRight } from 'lucide-react';
import { useProfileStore } from '../Dashboard/DashboardPages/Profile/store/useProfileStore';
import { useRouter } from '../utils/useRouter'; // <-- Import your custom router

export const TaxPromptModal = () => {
  const setShowTaxModal = useProfileStore((state) => state.setShowTaxModal);
  const { navigate } = useRouter(); // <-- Use your custom navigate function

  const handleGoToTax = () => {
    setShowTaxModal(false);
    
    // 1. Leave a temporary note for the PaymentPage
    localStorage.setItem('targetPaymentTab', 'tax-compliance');
    
    // 2. Tell your Dashboard to switch to the payment view
    navigate('/payment'); 
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#1a1528] w-full max-w-md rounded-3xl border border-purple-500/30 p-8 shadow-2xl relative overflow-hidden">
        
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-purple-500/20 blur-[50px] rounded-full" />

        <button 
          onClick={() => setShowTaxModal(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center relative z-10">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20 shadow-lg shadow-purple-500/10">
            <FileText className="w-8 h-8 text-purple-400" />
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">Profile Completed!</h2>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            Awesome! Your profile is set up. To ensure you can receive payments seamlessly, please complete your W-9 Tax Compliance form now.
          </p>

          <div className="w-full space-y-3">
            <button 
              onClick={handleGoToTax}
              className="w-full group bg-gradient-to-r from-purple-600 to-pink-600 py-3.5 rounded-xl text-white font-semibold hover:scale-[1.02] transform transition-all duration-300 shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2"
            >
              Complete W-9 Form 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => setShowTaxModal(false)}
              className="w-full py-3 text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              I'll do this later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};