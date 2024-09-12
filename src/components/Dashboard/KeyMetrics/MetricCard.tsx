import React, { ReactElement } from 'react';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: ReactElement;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon }) => (
  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex items-center">
    <div className="text-3xl mr-4 text-gray-600 dark:text-gray-300">
      {React.cloneElement(icon, { className: 'w-8 h-8' })}
    </div>
    <div>
      <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300">{title}</h3>
      <p className="text-xl font-bold text-gray-800 dark:text-white">{value}</p>
    </div>
  </div>
);

export default MetricCard;
