import React from 'react';
import { useStreamify } from '../../../context/StreamifyContext';
import MetricCard from './MetricCard';
import { FaUsers, FaHeadphones, FaMusic, FaDollarSign, FaTrophy } from 'react-icons/fa';

const KeyMetrics: React.FC = () => {
  const { state } = useStreamify();

  const iconClass = 'text-gray-600 dark:text-gray-300';

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Key Metrics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <MetricCard
          title="Total Users"
          value={state.keyMetrics.totalUsers.toLocaleString()}
          icon={<FaUsers className={iconClass} />}
        />
        <MetricCard
          title="Active Users"
          value={state.keyMetrics.activeUsers.toLocaleString()}
          icon={<FaHeadphones className={iconClass} />}
        />
        <MetricCard
          title="Total Streams"
          value={state.keyMetrics.totalStreams.toLocaleString()}
          icon={<FaMusic className={iconClass} />}
        />
        <MetricCard
          title="Revenue"
          value={`$${state.keyMetrics.revenue.toLocaleString()}`}
          icon={<FaDollarSign className={iconClass} />}
        />
        <MetricCard title="Top Artist" value={state.keyMetrics.topArtist} icon={<FaTrophy className={iconClass} />} />
      </div>
    </div>
  );
};

export default KeyMetrics;
