import React from 'react';
import { useTheme } from '../../../context/ThemeContext';

const Toolbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-gray-100 dark:bg-gray-800 p-4 flex justify-between items-center shadow-md">
      <div className="flex-1"></div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex-1 text-center">Streamify Dashboard</h1>
      <div className="flex-1 flex justify-end">
        <button
          onClick={toggleTheme}
          className="bg-white dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 font-bold py-2 px-4 rounded transition-colors duration-200"
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
