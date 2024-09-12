import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useStreamify } from '../../../context/StreamifyContext';
import { useTheme } from '../../../context/ThemeContext';
import { getRevenueDistributionOptions, getTopSongsOptions, getUserGrowthOptions } from 'src/utils/chartOptions';

const DataVisualization: React.FC = () => {
  const { state } = useStreamify();
  const { theme } = useTheme();

  const isDarkMode = theme === 'dark';

  const userGrowthOptions = getUserGrowthOptions(state.userGrowthData, isDarkMode);
  const revenueDistributionOptions = getRevenueDistributionOptions(state.revenueDistribution, isDarkMode);
  const topSongsOptions = getTopSongsOptions(state.topSongs, isDarkMode);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Data Visualization</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <HighchartsReact highcharts={Highcharts} options={userGrowthOptions} />
        <HighchartsReact highcharts={Highcharts} options={revenueDistributionOptions} />
        <HighchartsReact highcharts={Highcharts} options={topSongsOptions} />
      </div>
    </div>
  );
};

export default DataVisualization;
