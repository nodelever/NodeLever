import React from 'react';
import { Check } from 'lucide-react';

export const ProgressBar = ({ currentStep }) => (
  <div className="mb-8">
    <div className="flex items-center justify-between mb-2">
      {[1, 2, 3].map((step) => (
        <div key={step} className="flex items-center flex-1">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
            currentStep >= step 
              ? 'border-purple-500 bg-purple-500 text-white' 
              : 'border-gray-600 bg-transparent text-gray-500'
          }`}>
            {currentStep > step ? <Check className="w-5 h-5" /> : step}
          </div>
          {step < 3 && (
            <div className={`flex-1 h-1 mx-2 transition-all ${
              currentStep > step ? 'bg-purple-500' : 'bg-gray-600'
            }`} />
          )}
        </div>
      ))}
    </div>
    <div className="flex justify-between text-xs text-gray-400 mt-2">
      <span>Account Info</span>
      <span>Address</span>
      <span>Upload CV</span>
    </div>
  </div>
);