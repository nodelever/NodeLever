import React from 'react';
import { ArrowLeft, Upload, Loader2 } from 'lucide-react';
import { ProgressBar } from '../components/ProgressBar';
import { ErrorMessage } from '../components/ErrorMessage';
import { useProfileStore } from '../store/useProfileStore';

export const Step4UploadID = () => {
  const errors = useProfileStore((state) => state.errors);
  const currentStep = useProfileStore((state) => state.currentStep);
  const loading = useProfileStore((state) => state.loading);
  const formData = useProfileStore((state) => state.formData);
  const handleInputChange = useProfileStore((state) => state.handleInputChange);
  const handleBack = useProfileStore((state) => state.handleBack);
  const handleSubmit = useProfileStore((state) => state.handleSubmit);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <button 
            onClick={handleBack}
            className="flex items-center text-purple-400 hover:text-purple-300 mb-6 transition-colors"
            disabled={loading}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resume
          </button>

          <ProgressBar currentStep={currentStep} />

          <h2 className="text-2xl font-bold text-white mb-2">Verify Identity</h2>
          <p className="text-gray-400 mb-6">Upload a valid government-issued ID.</p>

          <div className="space-y-6">
            
            {/* ID Type Selector */}
            <div>
              <label className="block text-gray-300 text-sm mb-2">Document Type</label>
              <select
                value={formData.idType}
                onChange={(e) => handleInputChange('idType', e.target.value)}
                className="w-full bg-[#1a1a24] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
              >
                <option value="passport">International Passport</option>
                <option value="license">Driver's License</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Front Upload */}
              <div>
                <label className="block text-gray-300 text-sm mb-2">Front of ID / Data Page</label>
                <div className={`border-2 border-dashed ${errors.idFront ? 'border-red-500' : 'border-white/20'} rounded-xl p-6 text-center hover:border-purple-500 transition-colors bg-white/5 h-48 flex flex-col justify-center`}>
                  <input
                    type="file"
                    id="id-front-upload"
                    className="hidden"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={(e) => handleInputChange('idFront', e.target.files[0])}
                  />
                  <label htmlFor="id-front-upload" className="cursor-pointer flex flex-col items-center">
                    <Upload className="w-8 h-8 text-purple-400 mb-2" />
                    <span className="text-white font-medium text-sm mb-1 px-2 text-wrap break-all">
                      {formData.idFront ? formData.idFront.name : "Upload Front"}
                    </span>
                    <span className="text-gray-500 text-xs">JPG, PNG, PDF</span>
                  </label>
                </div>
                <ErrorMessage message={errors.idFront} />
              </div>

              {/* Back Upload - Only show if Driver's License */}
              {formData.idType === 'license' && (
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Back of ID</label>
                  <div className={`border-2 border-dashed ${errors.idBack ? 'border-red-500' : 'border-white/20'} rounded-xl p-6 text-center hover:border-purple-500 transition-colors bg-white/5 h-48 flex flex-col justify-center`}>
                    <input
                      type="file"
                      id="id-back-upload"
                      className="hidden"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={(e) => handleInputChange('idBack', e.target.files[0])}
                    />
                    <label htmlFor="id-back-upload" className="cursor-pointer flex flex-col items-center">
                      <Upload className="w-8 h-8 text-purple-400 mb-2" />
                      <span className="text-white font-medium text-sm mb-1 px-2 text-wrap break-all">
                        {formData.idBack ? formData.idBack.name : "Upload Back"}
                      </span>
                      <span className="text-gray-500 text-xs">JPG, PNG, PDF</span>
                    </label>
                  </div>
                  <ErrorMessage message={errors.idBack} />
                </div>
              )}
            </div>

            <ErrorMessage message={errors.submit} />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-medium mt-8 shadow-lg shadow-purple-900/20 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Submitting Profile...
                </>
              ) : (
                'Submit Profile'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};