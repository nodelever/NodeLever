import React, { useState, useEffect } from 'react';
import { PaymentsTab } from './PaymentsTab';
import { PaymentMethodTab } from './PaymentMethodTab';
import { TaxComplianceTab } from './TaxComplianceTab';

export const PaymentPage = () => {
  // 1. Keep the initial state simple
  const [activeTab, setActiveTab] = useState('payments');

  // 2. Safely check for the redirect note AFTER the page loads
  useEffect(() => {
    const savedTab = localStorage.getItem('targetPaymentTab');
    
    if (savedTab) {
      setActiveTab(savedTab);
      // Clean it up safely here
      localStorage.removeItem('targetPaymentTab');
    }
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'payments':
        return <PaymentsTab />;
      case 'payment-method':
        return <PaymentMethodTab />;
      case 'tax-compliance':
        return <TaxComplianceTab />;
      default:
        return <PaymentsTab />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
        <nav className="flex">
          {[
            { id: 'payments', label: 'Payments' },
            { id: 'payment-method', label: 'Payment Method' },
            { id: 'tax-compliance', label: 'Tax Compliance' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-6 py-4 text-center font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-white border-b-2 border-purple-400'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      
      {/* Renders the selected tab component */}
      <div className="transition-all duration-300">
        {renderTabContent()}
      </div>
    </div>
  );
};