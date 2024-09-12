import React from 'react';
import { useStreamify } from '../../../context/StreamifyContext';

const KeyMetrics: React.FC = () => {
  const { state } = useStreamify();

  return (
    <div className="key-metrics">
      <h2>Key Metrics</h2>
      <div>Total Users: {state.totalUsers}</div>
      <div>Active Users: {state.activeUsers}</div>
      <div>Total Streams: {state.totalStreams}</div>
      <div>Revenue: ${state.revenue}</div>
      <div>Top Artist: {state.topArtist}</div>
    </div>
  );
};

export default KeyMetrics;
