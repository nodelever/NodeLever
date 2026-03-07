import React from 'react';

export const ProjectPage = () => (
  <div className="space-y-6">
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
      <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Projects
      </h1>
      <p className="text-gray-300 mb-6">View and manage your active projects</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-2">Project {i}</h3>
            <p className="text-gray-400 mb-4">Description of project {i}</p>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: `${30 + i * 20}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);