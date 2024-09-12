import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import { StreamifyProvider } from './context/StreamifyContext';
import Toolbar from './components/common/Toolbar/Toolbar';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <StreamifyProvider>
        <div className="App bg-white dark:bg-gray-900 min-h-screen">
          <Toolbar />
          <Dashboard />
        </div>
      </StreamifyProvider>
    </ThemeProvider>
  );
}

export default App;
