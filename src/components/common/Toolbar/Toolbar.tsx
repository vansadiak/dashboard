import React from 'react';
import { useTheme } from '../../../context/ThemeContext';

const Toolbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex-1"></div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex-1 text-center">Streamify Dashboard</h1>
      <div className="flex-1 flex justify-end">
        <button
          onClick={toggleTheme}
          className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 font-bold py-2 px-4 rounded"
        >
          {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
