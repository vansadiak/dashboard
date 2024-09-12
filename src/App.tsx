import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import { StreamifyProvider } from './context/StreamifyContext';
import './App.css';

function App() {
  return (
    <StreamifyProvider>
      <div className="App">
        <Dashboard />
      </div>
    </StreamifyProvider>
  );
}

export default App;
