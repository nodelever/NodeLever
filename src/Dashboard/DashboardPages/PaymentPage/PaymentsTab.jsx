import React from 'react';

export const PaymentsTab = () => {
  const clientInvoices = [
    { client: 'Acme Corp', id: 'INV-2026-042', date: 'Mar 01, 2026', amount: '$4,500.00', status: 'Paid' },
    { client: 'TechStart Inc', id: 'INV-2026-041', date: 'Feb 28, 2026', amount: '$1,200.00', status: 'Pending' },
    { client: 'Global Design', id: 'INV-2026-040', date: 'Feb 15, 2026', amount: '$3,800.00', status: 'Paid' }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
        Invoices & Earnings
      </h2>
      <p className="text-gray-300 mb-6">Track your incoming payments and client invoices</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: Earnings Summary */}
        <div className="space-y-4">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">Total Earnings</h3>
            <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-lg p-6">
              <p className="text-white/80 text-sm mb-1">Year to Date</p>
              <h4 className="text-3xl font-bold text-white">$12,450.00</h4>
            </div>
          </div>
          
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">Receivables</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-yellow-500/20">
                <span className="text-gray-300">Awaiting Payment</span>
                <span className="text-yellow-400 font-bold">$1,200.00</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <span className="text-gray-400">Payout Account</span>
                <span className="text-white">Bank ending in **89</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column: Invoice History */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-white">Recent Client Invoices</h3>
            <button className="text-sm text-green-400 hover:text-green-300 transition-colors">View All</button>
          </div>
          
          <div className="space-y-3">
            {clientInvoices.map((invoice, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                <div>
                  <p className="text-white font-medium">{invoice.client}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-gray-400 text-xs">{invoice.id}</span>
                    <span className="text-gray-500 text-xs">•</span>
                    <span className="text-gray-400 text-xs">{invoice.date}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium mb-1">{invoice.amount}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    invoice.status === 'Paid' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {invoice.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};