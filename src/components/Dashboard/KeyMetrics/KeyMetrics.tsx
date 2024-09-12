import React from 'react';
import { useStreamify } from '../../../context/StreamifyContext';
import MetricCard from './MetricCard';
import { RiUserVoiceLine, RiMoneyDollarCircleLine } from 'react-icons/ri';
import { BiDollar } from 'react-icons/bi';
import { LuTrophy, LuHeadphones, LuMusic } from 'react-icons/lu';

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
          icon={<RiUserVoiceLine className={iconClass} />}
        />
        <MetricCard
          title="Active Users"
          value={state.keyMetrics.activeUsers.toLocaleString()}
          icon={<LuHeadphones className={iconClass} />}
        />
        <MetricCard
          title="Total Streams"
          value={state.keyMetrics.totalStreams.toLocaleString()}
          icon={<LuMusic className={iconClass} />}
        />
        <MetricCard
          title="Revenue"
          value={`$${state.keyMetrics.revenue.toLocaleString()}`}
          icon={<BiDollar className={iconClass} />}
        />
        <MetricCard title="Top Artist" value={state.keyMetrics.topArtist} icon={<LuTrophy className={iconClass} />} />
      </div>
    </div>
  );
};

export default KeyMetrics;
