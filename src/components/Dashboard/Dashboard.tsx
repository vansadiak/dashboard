import React from 'react';
import { motion } from 'framer-motion';
import { useStreamify } from '../../context/StreamifyContext';
import KeyMetrics from './KeyMetrics/KeyMetrics';
import DataVisualization from './DataVisualization/DataVisualization';
import DataTable from './DataTable/DataTable';

const Dashboard: React.FC = () => {
  const { state } = useStreamify();

  return (
    <motion.div
      className="p-4 max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <KeyMetrics />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <DataVisualization />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <DataTable />
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
