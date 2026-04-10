import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ProgressBar } from '../components/ProgressBar';
import { ErrorMessage } from '../components/ErrorMessage';
import { useProfileStore } from '../store/useProfileStore';

export const Step1AccountInfo = () => {
  const formData = useProfileStore((state) => state.formData);
  const errors = useProfileStore((state) => state.errors);
  const currentStep = useProfileStore((state) => state.currentStep);
  const handleInputChange = useProfileStore((state) => state.handleInputChange);
  const handleNext = useProfileStore((state) => state.handleNext);
  const handleBack = useProfileStore((state) => state.handleBack);

  // Defined the requested country codes
  const countryCodes = [
    { code: '+1', label: 'US', id: 'US' },
    { code: '+44', label: 'UK', id: 'UK' },
    { code: '+49', label: 'DE', id: 'DE' },
    { code: '+61', label: 'AU', id: 'AU' },
    { code: '+33', label: 'FR', id: 'FR' },
    { code: '+1', label: 'CA', id: 'CA' }, // Note: CA shares +1 with US
    { code: '+98', label: 'IR', id: 'IR' },
  ];

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

          <ProgressBar currentStep={currentStep} />

          <h2 className="text-2xl font-bold text-white mb-2">Account Info</h2>
          <p className="text-gray-400 mb-6">Basic information</p>

          <div className="space-y-4">
            
            {/* EMAIL BOX - UNCLICKABLE */}
            <div>
              <label className="block text-gray-300 text-sm mb-2">Email</label>
              <div className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-gray-500 cursor-not-allowed select-none">
                {formData.email || 'Loading email...'}
              </div>
              <p className="text-xs text-gray-500 mt-1">Email cannot be changed.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* PHONE NUMBER WITH COUNTRY CODE SELECTOR */}
              <div>
                <label className="block text-gray-300 text-sm mb-2">Phone Number</label>
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode || '+1'}
                    onChange={(e) => handleInputChange('countryCode', e.target.value)}
                    className="bg-[#1a1a24] border border-white/10 rounded-lg px-2 py-3 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                  >
                    {countryCodes.map((country) => (
                      <option key={country.id} value={country.code}>
                        {country.label} ({country.code})
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    placeholder="(555) 000-0000"
                    className={`flex-1 w-full bg-white/5 border ${errors.phoneNumber ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors`}
                  />
                </div>
                <ErrorMessage message={errors.phoneNumber} />
              </div>

              {/* DATE OF BIRTH - CALENDAR (US FORMAT) */}
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