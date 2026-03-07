import React from 'react';
import { FloatingOrb } from '../../common/FloatingOrb';

export const Background = ({ mousePosition }) => {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
      <FloatingOrb delay={0} size="400px" color="#8B5CF6" mousePosition={mousePosition} />
      <FloatingOrb delay={2} size="300px" color="#06B6D4" mousePosition={mousePosition} />
      <FloatingOrb delay={4} size="500px" color="#EC4899" mousePosition={mousePosition} />
      
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
    </div>
  );
};