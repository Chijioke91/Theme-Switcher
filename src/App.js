import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TestBody from './components/TestBody';

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'theme-light'
  );

  const toggleTheme = () => {
    theme === 'theme-light' ? setTheme('theme-dark') : setTheme('theme-light');
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div
      className={`bg-background-primary text-copy-primary min-h-screen ${theme}`}
    >
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <TestBody />
    </div>
  );
};

export default App;
