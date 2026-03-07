import React from 'react';

export const FloatingOrb = ({ delay, size, color, mousePosition }) => (
  <div 
    className="absolute rounded-full blur-xl opacity-20 animate-pulse"
    style={{
      width: size,
      height: size,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      animationDelay: `${delay}s`,
      animationDuration: '6s',
      transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
    }}
  />
);