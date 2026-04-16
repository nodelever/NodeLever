import React, { useState } from 'react';

export const ProjectPage = () => {
  const [applyingFor, setApplyingFor] = useState(null);
  const [appliedProjects, setAppliedProjects] = useState([]);
  
  // Track all fields from the detailed application form
  const [formData, setFormData] = useState({
    resume: null,
    fullName: "",
    email: "",
    phone: "",
    location: "",
    company: "",
    birthCountry: "",
    currentCountry: "",
    usState: "",
    primaryLanguage: "",
    additionalLanguage: "",
    educationLevel: "",
    consent: false
  });

  // Updated project list based on your screenshots
  const projectList = [
    { 
      id: 1, 
      title: 'Music Projects Interest Form', 
      description: 'Help train AI on music-related projects. Remote Contract opportunity.', 
      rate: '$50-85/hr'
    },
    { 
      id: 2, 
      title: 'Geospatial Analysis (QGIS) Specialists', 
      description: 'Use your expertise and creativity in QGIS to create projects to help train AI.',
      rate: '$125/hr'
    },
    { 
      id: 3, 
      title: 'Medical Imaging & 3D Analysis (3D Slicer) Specialists', 
      description: 'Use your expertise and creativity in 3D Slicer to create projects to help train AI.',
      rate: '$125/hr'
    },
    { 
      id: 4, 
      title: 'Video Production Specialists', 
      description: 'Use your expertise and creativity in Lightworks, Shotcut, or OpenShot to create projects to help train AI.',
      rate: '$125/hr'
    },
    { 
      id: 5, 
      title: 'Game Development Specialists', 
      description: 'Use your expertise and creativity in Godot, Defold, Solar 3D, Panda 3D or Stride (Xenko) to create projects to help train AI.',
      rate: '$125/hr'
    },
    { 
      id: 6, 
      title: '2D & 3D Digital Media Specialists', 
      description: 'Use your expertise and creativity in GIMP, Inkscape, Krita, Libresprite, or Blender to create projects to help train AI.',
      rate: '$125/hr'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  // Basic validation based on required (*) fields in your image
  const isFormValid = () => {
    return formData.fullName.trim() !== "" &&
           formData.email.trim() !== "" &&
           formData.birthCountry !== "" &&
           formData.currentCountry !== "" &&
           formData.primaryLanguage !== "" &&
           formData.educationLevel !== "";
  };

  const handleApply = (id) => {
    if (!isFormValid()) return;
    setAppliedProjects([...appliedProjects, id]);
    closeOverlay();
  };

  const closeOverlay = () => {
    setApplyingFor(null);
    setFormData({
      resume: null, fullName: "", email: "", phone: "", location: "", company: "",
      birthCountry: "", currentCountry: "", usState: "", primaryLanguage: "",
      additionalLanguage: "", educationLevel: "", consent: false
    });
  };

  const inputClasses = "w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white text-sm focus:outline-none focus:border-cyan-500 mb-4";
  const labelClasses = "text-xs text-gray-400 uppercase font-bold block mb-1.5 tracking-wider";

  return (
    <div className="space-y-6">
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Open Opportunities
        </h1>
        <p className="text-gray-300 mb-6">Browse available AI training projects and submit your application.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project) => {
            const isPending = appliedProjects.includes(project.id);

            return (
              <div key={project.id} className="bg-white/5 rounded-xl p-6 border border-white/10 flex flex-col justify-between min-h-[260px]">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-white leading-tight pr-2">{project.title}</h3>
                    <span className="text-green-400 font-medium text-sm whitespace-nowrap bg-green-400/10 px-2 py-1 rounded">
                      {project.rate}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">{project.description}</p>
                </div>

                {isPending ? (
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 flex items-center justify-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Application Submitted</span>
                  </div>
                ) : (
                  <button 
                    onClick={() => setApplyingFor(project)}
                    className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 rounded-lg transition-colors text-sm"
                  >
                    Submit Interest
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Full Application Form Modal */}
      {applyingFor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#1a1625] border border-white/10 rounded-2xl p-6 max-w-2xl w-full shadow-2xl animate-in fade-in zoom-in duration-200 flex flex-col max-h-[90vh]">
            
            {/* Header */}
            <div className="mb-4 pb-4 border-b border-white/10 shrink-0">
              <h2 className="text-2xl font-bold text-white mb-1">Submit Your Application</h2>
              <p className="text-gray-400 text-sm">Applying for: <span className="text-cyan-400 font-medium">{applyingFor.title}</span></p>
            </div>
            
            {/* Scrollable Form Body */}
            <div className="overflow-y-auto pr-2 flex-grow custom-scrollbar">
              
              <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Personal Information</h3>
              
              <label className={labelClasses}>Resume/CV</label>
              <input type="file" name="resume" onChange={handleInputChange} className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-white/10 file:text-white hover:file:bg-white/20 mb-4 cursor-pointer" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <div>
                  <label className={labelClasses}>Full name <span className="text-red-400">*</span></label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>Email <span className="text-red-400">*</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>Current location</label>
                  <input type="text" name="location" value={formData.location} onChange={handleInputChange} className={inputClasses} />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClasses}>Current company</label>
                  <input type="text" name="company" value={formData.company} onChange={handleInputChange} className={inputClasses} />
                </div>
              </div>

              <h3 className="text-white font-semibold mt-6 mb-4 text-sm tracking-wide uppercase border-t border-white/10 pt-6">Application Questions</h3>

              <div className="grid grid-cols-1 gap-y-1">
                <label className={labelClasses}>In which country were you born? <span className="text-red-400">*</span></label>
                <select name="birthCountry" value={formData.birthCountry} onChange={handleInputChange} className={inputClasses}>
                  <option value="">Select...</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="IN">India</option>
                  {/* Add more countries as needed */}
                </select>

                <label className={labelClasses}>In which country are you currently residing? <span className="text-red-400">*</span></label>
                <select name="currentCountry" value={formData.currentCountry} onChange={handleInputChange} className={inputClasses}>
                  <option value="">Select...</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="IN">India</option>
                </select>

                <label className={labelClasses}>In which US State are you currently residing (If applicable)?</label>
                <select name="usState" value={formData.usState} onChange={handleInputChange} className={inputClasses}>
                  <option value="">Select...</option>
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                  <option value="TX">Texas</option>
                </select>

                <label className={labelClasses}>Primary Language Spoken <span className="text-red-400">*</span></label>
                <select name="primaryLanguage" value={formData.primaryLanguage} onChange={handleInputChange} className={inputClasses}>
                  <option value="">Select...</option>
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                </select>

                <label className={labelClasses}>Additional Language Relevant to this Job</label>
                <select name="additionalLanguage" value={formData.additionalLanguage} onChange={handleInputChange} className={inputClasses}>
                  <option value="">Select...</option>
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                </select>

                <label className={labelClasses}>Highest Education Level <span className="text-red-400">*</span></label>
                <select name="educationLevel" value={formData.educationLevel} onChange={handleInputChange} className={inputClasses}>
                  <option value="">Select...</option>
                  <option value="High School">High School</option>
                  <option value="Bachelor's">Bachelor's Degree</option>
                  <option value="Master's">Master's Degree</option>
                  <option value="PhD">Doctorate (PhD)</option>
                </select>
              </div>

              <div className="mt-4 mb-2 flex items-start gap-3 bg-white/5 p-4 rounded-lg">
                <input 
                  type="checkbox" 
                  name="consent" 
                  checked={formData.consent} 
                  onChange={handleInputChange}
                  className="mt-1 cursor-pointer w-4 h-4 rounded border-white/20 bg-white/5 text-cyan-500 focus:ring-cyan-500"
                />
                <label className="text-sm text-gray-300 leading-snug cursor-pointer" onClick={() => setFormData(p => ({...p, consent: !p.consent}))}>
                  Yes, Nodelever can contact me about future job opportunities for up to 3 years <br/>
                  <a href="#" className="text-cyan-400 hover:underline text-xs">Privacy policy</a>
                </label>
              </div>

            </div>

            {/* Footer / Actions */}
            <div className="mt-6 pt-4 border-t border-white/10 flex gap-3 shrink-0">
              <button 
                onClick={closeOverlay}
                className="flex-1 px-4 py-3 border border-white/10 rounded-lg text-white hover:bg-white/5 transition-colors text-sm font-medium"
              >
                Cancel
              </button>
              <button 
                onClick={() => handleApply(applyingFor.id)}
                disabled={!isFormValid()}
                className={`flex-1 px-4 py-3 rounded-lg text-white font-bold transition-all text-sm ${
                  !isFormValid() 
                  ? 'bg-gray-700 cursor-not-allowed opacity-50' 
                  : 'bg-gradient-to-r from-purple-500 to-purple-600 hover:opacity-90'
                }`}
              >
                SUBMIT APPLICATION
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};