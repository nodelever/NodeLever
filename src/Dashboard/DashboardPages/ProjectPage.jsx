import React, { useState } from 'react';

export const ProjectPage = () => {
  const [applyingFor, setApplyingFor] = useState(null);
  const [appliedProjects, setAppliedProjects] = useState([]);
  const [appDetails, setAppDetails] = useState(""); // Track the text area input

  const projectList = [
    { 
      id: 1, 
      title: 'VR - Shooting Scenes for AI VR Generation Training', 
      description: 'Capture and upload immersive environmental footage to train next-generation spatial AI models.' 
    },
    { 
      id: 2, 
      title: 'Language Gaming', 
      description: 'Participate in interactive linguistic scenarios to improve natural language processing and gaming dialogue.' 
    },
    { 
      id: 3, 
      title: 'Image Annotation', 
      description: 'Precision tagging and bounding-box placement for computer vision training sets.' 
    }
  ];

  const handleApply = (id) => {
    // Only proceed if there is content in the application details
    if (appDetails.trim().length < 10) return;

    setAppliedProjects([...appliedProjects, id]);
    setApplyingFor(null);
    setAppDetails(""); // Reset for next time
  };

  const closeOverlay = () => {
    setApplyingFor(null);
    setAppDetails("");
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Projects
        </h1>
        <p className="text-gray-300 mb-6">Browse available opportunities or track your applications.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectList.map((project) => {
            const isPending = appliedProjects.includes(project.id);

            return (
              <div key={project.id} className="bg-white/5 rounded-xl p-6 border border-white/10 flex flex-col justify-between min-h-[250px]">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 leading-tight">{project.title}</h3>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">{project.description}</p>
                </div>

                {isPending ? (
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 flex items-center justify-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Pending Verification</span>
                  </div>
                ) : (
                  <button 
                    onClick={() => setApplyingFor(project)}
                    className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 rounded-lg transition-colors text-sm"
                  >
                    Apply to Project
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Application Modal with Guard Logic */}
      {applyingFor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1625] border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-200">
            <h2 className="text-2xl font-bold text-white mb-2">Project Application</h2>
            <p className="text-gray-400 text-sm mb-6">You are applying for: <span className="text-cyan-400 font-medium">{applyingFor.title}</span></p>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-400 uppercase font-bold block mb-2 tracking-wider flex justify-between">
                  <span>Application Details</span>
                  <span className={appDetails.length < 10 ? "text-red-400" : "text-green-400"}>
                    {appDetails.length}/10 min
                  </span>
                </label>
                <textarea 
                  value={appDetails}
                  onChange={(e) => setAppDetails(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white text-sm focus:outline-none focus:border-cyan-500 min-h-[100px]"
                  placeholder="Tell us about your setup or relevant experience (minimum 10 characters)..."
                ></textarea>
              </div>
              
              <div className="flex gap-3">
                <button 
                  onClick={closeOverlay}
                  className="flex-1 px-4 py-2 border border-white/10 rounded-lg text-white hover:bg-white/5 transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => handleApply(applyingFor.id)}
                  disabled={appDetails.trim().length < 10}
                  className={`flex-1 px-4 py-2 rounded-lg text-white font-bold transition-all text-sm ${
                    appDetails.trim().length < 10 
                    ? 'bg-gray-600 cursor-not-allowed opacity-50' 
                    : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90'
                  }`}
                >
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};