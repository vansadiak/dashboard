import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Dashboard from './components/Dashboard/Dashboard';
import { StreamifyProvider } from './context/StreamifyContext';
import Toolbar from './components/common/Toolbar/Toolbar';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Loader from './components/common/Loader';

function App() {
  return (
    <ThemeProvider>
      <StreamifyProvider>
        <AnimatePresence>
          <motion.div
            className="App bg-white dark:bg-gray-900 min-h-screen flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Toolbar />
            <motion.main
              className="flex-grow pt-16"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Dashboard />
            </motion.main>
            <Loader />
          </motion.div>
        </AnimatePresence>
      </StreamifyProvider>
    </ThemeProvider>
  );
}

export default App;
