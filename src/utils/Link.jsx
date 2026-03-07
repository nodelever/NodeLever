import React from 'react';

export const Link = ({ to, children, className, onClick }) => (
  <button onClick={() => { onClick?.(); window.navigate?.(to); }} className={className}>
    {children}
  </button>
);