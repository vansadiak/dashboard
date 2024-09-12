import Highcharts from 'highcharts';
import { UserGrowthData, RevenueDistribution, TopSong } from '../../types/streamifyContract';

const getchartColors = (isDarkMode: boolean) => {
  return {
    background: isDarkMode ? '#1F2937' : '#FFFFFF',
    text: isDarkMode ? '#D1D5DB' : '#1F2937',
    lineColors: ['#3B82F6', '#10B981'],
    pieColors: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'],
  };
};

export const getUserGrowthOptions = (userGrowthData: UserGrowthData[], isDarkMode: boolean): Highcharts.Options => {
  const chartColors = getchartColors(isDarkMode);
  return {
    chart: {
      type: 'line',
      backgroundColor: chartColors.background,
    },
    title: {
      text: 'User Growth',
      style: { color: chartColors.text },
    },
    xAxis: {
      categories: userGrowthData.map((data) => data.date),
      labels: { style: { color: chartColors.text } },
    },
    yAxis: {
      title: {
        text: 'Number of Users',
        style: { color: chartColors.text },
      },
      labels: { style: { color: chartColors.text } },
    },
    series: [
      {
        type: 'line',
        name: 'Total Users',
        data: userGrowthData.map((data) => data.totalUsers),
        color: chartColors.lineColors[0],
      },
      {
        type: 'line',
        name: 'Active Users',
        data: userGrowthData.map((data) => data.activeUsers),
        color: chartColors.lineColors[1],
      },
    ],
    legend: {
      itemStyle: { color: chartColors.text },
    },
  };
};

export const getRevenueDistributionOptions = (
  revenueDistribution: RevenueDistribution[],
  isDarkMode: boolean,
): Highcharts.Options => {
  const chartColors = getchartColors(isDarkMode);
  return {
    chart: {
      type: 'pie',
      backgroundColor: chartColors.background,
    },
    title: {
      text: 'Revenue Distribution',
      style: { color: chartColors.text },
    },
    series: [
      {
        type: 'pie',
        name: 'Revenue',
        data: revenueDistribution.map((item, index) => ({
          name: item.source,
          y: item.amount,
          color: chartColors.pieColors[index % chartColors.pieColors.length],
        })),
      },
    ],
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: { color: chartColors.text },
        },
      },
    },
  };
};

export const getTopSongsOptions = (topSongs: TopSong[], isDarkMode: boolean): Highcharts.Options => {
  const chartColors = getchartColors(isDarkMode);
  return {
    chart: {
      type: 'bar',
      backgroundColor: chartColors.background,
    },
    title: {
      text: 'Top 5 Streamed Songs',
      style: { color: chartColors.text },
    },
    xAxis: {
      categories: topSongs.map((song) => song.name),
      labels: { style: { color: chartColors.text } },
    },
    yAxis: {
      title: {
        text: 'Number of Streams',
        style: { color: chartColors.text },
      },
      labels: { style: { color: chartColors.text } },
    },
    series: [
      {
        type: 'bar',
        name: 'Streams',
        data: topSongs.map((song) => song.streams),
        color: chartColors.lineColors[0],
      },
    ],
    legend: {
      itemStyle: { color: chartColors.text },
    },
  };
};
