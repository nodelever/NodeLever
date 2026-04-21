import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projectsData, projectStyles } from './projectData';

export default function ProjectsList() {
  const [injected, setInjected] = useState(false);

  useEffect(() => {
    if (!injected) {
      const tag = document.createElement('style');
      tag.textContent = projectStyles;
      document.head.appendChild(tag);
      setInjected(true);
    }
  }, [injected]);

  return (
    <div className="nl-projects-page">
      <div className="nl-grid-bg" />
      
      <div className="nl-container">
        <div className="nl-page-header">
          <h1 className="nl-page-title">Active <em>Initiatives</em></h1>
        </div>

        {projectsData.map((project, index) => (
          <div key={project.id} className={`nl-project-card delay-${index + 1}`}>
            <div className="nl-project-header">
              <div>
                <div className={`nl-badge ${project.badgeClass}`}>
                  <div className="nl-badge-dot" />
                  {project.badgeText}
                </div>
                <h2 className="nl-project-title">{project.title}</h2>
                <p style={{ marginTop: '15px', color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: '1.6' }}>
                  {project.summary}
                </p>
              </div>
              <Link to={`/project/${project.id}`} className="nl-btn-primary">
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}