import React from 'react';
import { useTheme } from '../../../context/ThemeContext';

const Toolbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 flex justify-end">
      <button
        onClick={toggleTheme}
        className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 font-bold py-2 px-4 rounded"
      >
        {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default Toolbar;
