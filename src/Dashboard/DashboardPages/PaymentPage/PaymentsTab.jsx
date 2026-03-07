import React from 'react';

export const PaymentsTab = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
    <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
      Payment Overview
    </h2>
    <p className="text-gray-300 mb-6">Manage your billing and payment methods</p>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-4">Current Plan</h3>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-4">
            <h4 className="text-lg font-bold text-white">Pro Plan</h4>
            <p className="text-white/80">$29/month</p>
          </div>
        </div>
        
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-4">Payment Methods</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
              <span className="text-gray-300">**** **** **** 1234</span>
              <span className="text-purple-400">Primary</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4">Billing History</h3>
        <div className="space-y-3">
          {[
            { date: 'Jan 15, 2025', amount: '$29.00', status: 'Paid' },
            { date: 'Dec 15, 2024', amount: '$29.00', status: 'Paid' },
            { date: 'Nov 15, 2024', amount: '$29.00', status: 'Paid' }
          ].map((bill, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
              <div>
                <p className="text-white font-medium">{bill.amount}</p>
                <p className="text-gray-400 text-sm">{bill.date}</p>
              </div>
              <span className="text-green-400 text-sm">{bill.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);