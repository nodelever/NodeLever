import React from 'react';

export const TaxComplianceTab = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
    <h2 className="text-2xl font-bold mb-6 text-white">Tax Compliance</h2>
    <div className="space-y-6">
      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">Tax Information</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Tax ID</span>
            <span className="text-white">12-3456789</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Tax Region</span>
            <span className="text-white">United States</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">VAT Number</span>
            <span className="text-white">Not applicable</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">Tax Documents</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <span className="text-gray-300">2024 Tax Statement</span>
            <button className="text-purple-400 hover:text-purple-300">Download</button>
          </div>
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <span className="text-gray-300">2023 Tax Statement</span>
            <button className="text-purple-400 hover:text-purple-300">Download</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);