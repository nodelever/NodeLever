import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData, projectStyles } from './projectData';

export default function ProjectDetail() {
  const { id } = useParams(); // This grabs the URL parameter (e.g., 'nexus')
  const [injected, setInjected] = useState(false);

  useEffect(() => {
    if (!injected) {
      const tag = document.createElement('style');
      tag.textContent = projectStyles;
      document.head.appendChild(tag);
      setInjected(true);
    }
  }, [injected]);

  // Find the specific project data based on the URL
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="nl-projects-page">
        <div className="nl-container">
          <h1 className="nl-page-title">Project not found</h1>
          <Link to="/" className="nl-btn-primary" style={{width: 'fit-content'}}>← Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="nl-projects-page">
      <div className="nl-grid-bg" />
      
      <div className="nl-container">
        <div className="nl-project-card delay-1">
          <div className="nl-project-header">
            <div>
              <div className={`nl-badge ${project.badgeClass}`}>
                <div className="nl-badge-dot" />
                {project.badgeText}
              </div>
              <h2 className="nl-project-title">{project.title}</h2>
            </div>
            <div style={{display: 'flex', gap: '15px'}}>
              <Link to="/project" className="nl-btn-primary" style={{ background: 'rgba(255,255,255,0.1)' }}>← Back</Link>
              <Link to="/reg" className="nl-btn-primary">Register Now →</Link>
            </div>
          </div>

          <div className="nl-project-grid">
            {project.content}
          </div>
        </div>
      </div>
    </div>
  );
}