import React from 'react';
import { ArrowLeft, Upload } from 'lucide-react';
import { ProgressBar } from '../components/ProgressBar';
import { ErrorMessage } from '../components/ErrorMessage';
import { useProfileStore } from '../store/useProfileStore';

export const Step3UploadCV = () => {
  const errors = useProfileStore((state) => state.errors);
  const currentStep = useProfileStore((state) => state.currentStep);
  const formData = useProfileStore((state) => state.formData);
  const handleInputChange = useProfileStore((state) => state.handleInputChange);
  const handleBack = useProfileStore((state) => state.handleBack);
  const handleNext = useProfileStore((state) => state.handleNext); // <-- Use handleNext instead of handleSubmit

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <button 
            onClick={handleBack}
            className="flex items-center text-purple-400 hover:text-purple-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Address
          </button>

          <ProgressBar currentStep={currentStep} />

          <h2 className="text-2xl font-bold text-white mb-2">Upload Resume</h2>
          <p className="text-gray-400 mb-6">Upload your most recent CV (PDF or DOC)</p>

          <div className="space-y-4">
            <div className={`border-2 border-dashed ${errors.cvFile ? 'border-red-500' : 'border-white/20'} rounded-xl p-8 text-center hover:border-purple-500 transition-colors bg-white/5`}>
              <input
                type="file"
                id="cv-upload"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={(e) => handleInputChange('cvFile', e.target.files[0])}
              />
              <label htmlFor="cv-upload" className="cursor-pointer flex flex-col items-center">
                <Upload className="w-10 h-10 text-purple-400 mb-4" />
                <span className="text-white font-medium mb-1">
                  {formData.cvFile ? formData.cvFile.name : "Click to browse or drag and drop"}
                </span>
                <span className="text-gray-500 text-sm">PDF or DOC up to 5MB</span>
              </label>
            </div>
            <ErrorMessage message={errors.cvFile} />

            {/* Changed from Submit to Next Step */}
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