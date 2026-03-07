import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ProgressBar } from '../components/ProgressBar';
import { ErrorMessage } from '../components/ErrorMessage';
import { useProfileStore } from '../store/useProfileStore';

export const Step1AccountInfo = () => {
  // Grab only what this component needs
  const formData = useProfileStore((state) => state.formData);
  const errors = useProfileStore((state) => state.errors);
  const currentStep = useProfileStore((state) => state.currentStep);
  const handleInputChange = useProfileStore((state) => state.handleInputChange);
  const handleNext = useProfileStore((state) => state.handleNext);
  const handleBack = useProfileStore((state) => state.handleBack);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <button 
            onClick={handleBack}
            className="flex items-center text-purple-400 hover:text-purple-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Complete Profile
          </button>

          {/* If ProgressBar is a component, it might also just pull currentStep from Zustand directly! */}
          <ProgressBar currentStep={currentStep} />

          <h2 className="text-2xl font-bold text-white mb-2">Account Info</h2>
          <p className="text-gray-400 mb-6">Basic information</p>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter your email"
                className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors`}
              />
              <ErrorMessage message={errors.email} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className={`w-full bg-white/5 border ${errors.phoneNumber ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors`}
                />
                <ErrorMessage message={errors.phoneNumber} />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">Date of Birth</label>
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  className={`w-full bg-white/5 border ${errors.dateOfBirth ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors [color-scheme:dark]`}
                />
                <ErrorMessage message={errors.dateOfBirth} />
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-medium mt-8 shadow-lg shadow-purple-900/20"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};