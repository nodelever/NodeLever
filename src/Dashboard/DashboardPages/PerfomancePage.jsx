import React from 'react';

export const PerformancePage = () => {
  // Weekly data mapping - currently flatlining at 0 to match your metrics
  const chartData = [
    { label: 'Mon', value: 0 },
    { label: 'Tue', value: 0 },
    { label: 'Wed', value: 0 },
    { label: 'Thu', value: 0 },
    { label: 'Fri', value: 0 },
    { label: 'Sat', value: 0 },
    { label: 'Sun', value: 0 },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
          Performance
        </h1>
        <p className="text-gray-300 mb-6">Track your analytics and performance metrics</p>
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Current Project', value: 'None', change: 'Inactive' },
            { label: 'Hours Tracked', value: '0h', change: '0%' },
            { label: 'Activity Level', value: '0%', change: '0%' },
            { label: 'Success Rate', value: '0%', change: '0%' }
          ].map((metric, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-sm font-medium text-gray-400 mb-2">{metric.label}</h3>
              <p className="text-2xl font-bold text-white mb-1">{metric.value}</p>
              <p className={`${metric.change === 'Inactive' ? 'text-gray-500' : 'text-gray-400'} text-sm`}>
                {metric.change}
              </p>
            </div>
          ))}
        </div>
        
        {/* Performance Chart Section */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-6">Activity Chart</h3>
          
          <div className="h-64 flex flex-col justify-end">
            {/* Chart Area */}
            <div className="flex-1 flex items-end justify-between gap-4 border-b border-white/10 pb-2">
              {chartData.map((data, index) => (
                <div key={index} className="flex flex-col items-center w-full group">
                  {/* Tooltip on hover */}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-gray-300 mb-2">
                    {data.value}
                  </span>
                  {/* Bar rendering (Min height of 2px so the 0 value is still visible as a baseline) */}
                  <div 
                    className="w-full max-w-[48px] bg-gradient-to-t from-purple-500/40 to-pink-500/40 rounded-t-md transition-all duration-500 hover:from-purple-400 hover:to-pink-400 cursor-pointer"
                    style={{ height: `${Math.max(data.value, 2)}px` }}
                  ></div>
                </div>
              ))}
            </div>
            
            {/* X-Axis Labels */}
            <div className="flex justify-between mt-4 text-xs text-gray-400 font-medium">
              {chartData.map((data, index) => (
                <div key={index} className="w-full text-center uppercase tracking-wider">
                  {data.label}
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};