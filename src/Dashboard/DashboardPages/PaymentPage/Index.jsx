import React, { useState, useEffect } from 'react';
import { Lock } from 'lucide-react'; // <-- Import Lock icon
import { PaymentsTab } from './PaymentsTab';
import { PaymentMethodTab } from './PaymentMethodTab';
import { TaxComplianceTab } from './TaxComplianceTab';

export const PaymentPage = ({ isLocked }) => {
  // If locked, default to the only tab they can use. Otherwise, normal default.
  const [activeTab, setActiveTab] = useState(isLocked ? 'tax-compliance' : 'payments');

  useEffect(() => {
    const savedTab = localStorage.getItem('targetPaymentTab');
    
    if (savedTab) {
      setActiveTab(savedTab);
      localStorage.removeItem('targetPaymentTab');
    } else if (isLocked && activeTab !== 'tax-compliance') {
      // Force them to tax compliance if they are locked out
      setActiveTab('tax-compliance');
    }
  }, [isLocked]);

  const renderTabContent = () => {
    // Failsafe: if they somehow click a locked tab, show a locked message
    if (isLocked && (activeTab === 'payments' || activeTab === 'payment-method')) {
      return (
        <div className="flex flex-col items-center justify-center py-24 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 mt-6">
          <Lock className="w-12 h-12 text-gray-500 mb-4" />
          <h3 className="text-xl font-bold text-white">Tab Locked</h3>
          <p className="text-gray-400 mt-2">Complete your profile and Tax Compliance to view this section.</p>
        </div>
      );
    }

    switch (activeTab) {
      case 'payments':
        return <PaymentsTab />;
      case 'payment-method':
        return <PaymentMethodTab />;
      case 'tax-compliance':
        return <TaxComplianceTab />;
      default:
        return <TaxComplianceTab />;
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
          ].map((tab) => {
            // Determine if THIS specific button should be locked
            const isTabLocked = isLocked && tab.id !== 'tax-compliance';

            return (
              <button
                key={tab.id}
                onClick={() => {
                  if (isTabLocked) return; // Prevent clicking
                  setActiveTab(tab.id);
                }}
                className={`flex-1 px-6 py-4 text-center font-medium transition-all flex items-center justify-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-white border-b-2 border-purple-400'
                    : isTabLocked
                    ? 'text-gray-600 cursor-not-allowed bg-black/20' // Grayed out styling
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {isTabLocked && <Lock className="w-4 h-4" />}
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
      
      <div className="transition-all duration-300">
        {renderTabContent()}
      </div>
    </div>
  );
};