import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ProgressBar } from '../components/ProgressBar';
import { ErrorMessage } from '../components/ErrorMessage';
import { useProfileStore } from '../store/useProfileStore';

export const Step2Address = () => {
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
            Back to Account Info
          </button>

          <ProgressBar currentStep={currentStep} />

          <h2 className="text-2xl font-bold text-white mb-2">Address Details</h2>
          <p className="text-gray-400 mb-6">Where can we reach you?</p>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-2">Street Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                placeholder="123 Main St"
                className={`w-full bg-white/5 border ${errors.address ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors`}
              />
              <ErrorMessage message={errors.address} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm mb-2">City</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  placeholder="New York"
                  className={`w-full bg-white/5 border ${errors.city ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors`}
                />
                <ErrorMessage message={errors.city} />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">State/Province</label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  placeholder="NY"
                  className={`w-full bg-white/5 border ${errors.state ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors`}
                />
                <ErrorMessage message={errors.state} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm mb-2">Country</label>
                <select
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  className={`w-full bg-gray-800 border ${errors.country ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors`}
                >
                  <option value="">Select a country</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ng">Nigeria</option>
                </select>
                <ErrorMessage message={errors.country} />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">Zip/Postal Code</label>
                <input
                  type="text"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange('zipCode', e.target.value)}
                  placeholder="10001"
                  className={`w-full bg-white/5 border ${errors.zipCode ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors`}
                />
                <ErrorMessage message={errors.zipCode} />
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