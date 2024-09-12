import React, { ReactElement } from 'react';
import { motion } from 'framer-motion';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: ReactElement;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon }) => (
  <motion.div
    className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex items-center cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-600"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <motion.div
      className="text-3xl mr-4 text-gray-600 dark:text-gray-300"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      {React.cloneElement(icon, { className: 'w-8 h-8' })}
    </motion.div>
    <div>
      <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300">{title}</h3>
      <motion.p
        className="text-xl font-bold text-gray-800 dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        {value}
      </motion.p>
    </div>
  </motion.div>
);

export default MetricCard;
