import React from 'react';
import { useStreamify } from '../../context/StreamifyContext';
import KeyMetrics from './KeyMetrics/KeyMetrics';
import DataVisualization from './DataVisualization/DataVisualization';
import DataTable from './DataTable/DataTable';

const Dashboard: React.FC = () => {
  const { state } = useStreamify();

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Streamify Dashboard</h1>
      <KeyMetrics />
      <DataVisualization />
      <DataTable />
    </div>
  );
};

export default Dashboard;
