import React from 'react';

export const PerformancePage = () => (
  <div className="space-y-6">
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
      <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
        Performance
      </h1>
      <p className="text-gray-300 mb-6">Track your analytics and performance metrics</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Users', value: '12,345', change: '+12%' },
          { label: 'Revenue', value: '$54,321', change: '+8%' },
          { label: 'Projects', value: '87', change: '+23%' },
          { label: 'Success Rate', value: '94.2%', change: '+5%' }
        ].map((metric, i) => (
          <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-sm font-medium text-gray-400 mb-2">{metric.label}</h3>
            <p className="text-2xl font-bold text-white mb-1">{metric.value}</p>
            <p className="text-green-400 text-sm">{metric.change}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4">Performance Chart</h3>
        <div className="h-40 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg flex items-center justify-center">
          <p className="text-gray-400">Chart visualization would go here</p>
        </div>
      </div>
    </div>
  </div>
);