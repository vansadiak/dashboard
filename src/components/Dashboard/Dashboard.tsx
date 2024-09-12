import React from 'react';
import { useStreamify } from '../../context/StreamifyContext';
import KeyMetrics from './KeyMetrics/KeyMetrics';
import DataVisualization from './DataVisualization/DataVisualization';
import DataTable from './DataTable/DataTable';

const Dashboard: React.FC = () => {
  const { state } = useStreamify();

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <KeyMetrics />
      <DataVisualization />
      <DataTable />
    </div>
  );
};

export default Dashboard;
