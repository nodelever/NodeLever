import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

const themes = {
  interactive: {
    primary: 'bg-blue-600',
    secondary: 'bg-purple-600',
    text: 'text-gray-800',
    accent: 'bg-yellow-400'
  },
  creative: {
    primary: 'bg-pink-600',
    secondary: 'bg-orange-500',
    text: 'text-gray-900',
    accent: 'bg-green-400'
  },
  professional: {
    primary: 'bg-gray-800',
    secondary: 'bg-blue-700',
    text: 'text-gray-700',
    accent: 'bg-red-500'
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('professional');

  return (
    <ThemeContext.Provider value={{ theme, themes: themes[theme], setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);