import React, { useState, useEffect } from 'react';

const AnimatedSection = ({ children, direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getAnimationClass = () => {
    const baseClasses = "transition-all duration-700 ";
    const hiddenClasses = {
      up: "opacity-0 translate-y-10",
      down: "opacity-0 -translate-y-10",
      left: "opacity-0 -translate-x-10",
      right: "opacity-0 translate-x-10"
    };
    
    return `${baseClasses} ${isVisible ? "opacity-100 translate-y-0 translate-x-0" : hiddenClasses[direction]}`;
  };

  return (
    <div className={getAnimationClass()}>
      {children}
    </div>
  );
};

export default AnimatedSection;