import React from 'react';
import { UserCircle, Shield, CheckCircle2, Loader2 } from 'lucide-react';
import { useProfileStore } from '../store/useProfileStore';
import { LegalAgreementModal } from '../components/LegalAgreementModal';

export const Overview = () => {
  const userStatus = useProfileStore((state) => state.userStatus);
  const loading = useProfileStore((state) => state.loading);
  const setView = useProfileStore((state) => state.setView);
  const setShowLegalModal = useProfileStore((state) => state.setShowLegalModal);
  
const showLegalModal = useProfileStore((state) => state.showLegalModal);

  if (loading && !userStatus.profileComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Profile Overview</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Profile Completion Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-purple-500/20 p-3 rounded-xl">
                <UserCircle className="w-6 h-6 text-purple-400" />
              </div>
              {userStatus.profileComplete && (
                <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full flex items-center">
                  <CheckCircle2 className="w-3 h-3 mr-1" /> Complete
                </span>
              )}
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-2">Personal Data</h3>
            <p className="text-gray-400 mb-6 text-sm">
              {userStatus.profileComplete 
                ? "Your personal information is up to date." 
                : "Complete your profile to unlock all features."}
            </p>
            
            {!userStatus.profileComplete && (
              <button 
                onClick={() => setView('step1')}
                className="w-full bg-purple-600/20 text-purple-400 border border-purple-500/30 px-4 py-2 rounded-lg hover:bg-purple-600/30 transition-colors font-medium"
              >
                Complete Profile
              </button>
            )}
          </div>

          {/* Legal Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-pink-500/20 p-3 rounded-xl">
                <Shield className="w-6 h-6 text-pink-400" />
              </div>
              {userStatus.legalAgreed && (
                <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full flex items-center">
                  <CheckCircle2 className="w-3 h-3 mr-1" /> Accepted
                </span>
              )}
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-2">Legal Agreements</h3>
            <p className="text-gray-400 mb-6 text-sm">
              Review and accept our terms of service and privacy policy.
            </p>
            {showLegalModal && <LegalAgreementModal/>}
            {!userStatus.legalAgreed && (
              <button 
                onClick={() => setShowLegalModal(true)}
                className="w-full bg-pink-600/20 text-pink-400 border border-pink-500/30 px-4 py-2 rounded-lg hover:bg-pink-600/30 transition-colors font-medium"
              >
                Review Terms
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};