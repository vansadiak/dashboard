import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import KeyMetrics from './KeyMetrics';
import { StreamifyProvider } from '../../../context/StreamifyContext';

// Mock the useStreamify hook
jest.mock('../../../context/StreamifyContext', () => ({
  useStreamify: () => ({
    state: {
      keyMetrics: {
        totalUsers: 1000000,
        activeUsers: 750000,
        totalStreams: 5000000,
        revenue: 2000000,
        topArtist: 'The Weeknd',
      },
    },
  }),
}));

describe('KeyMetrics', () => {
  it('renders all metric cards with correct values', () => {
    render(
      <StreamifyProvider>
        <KeyMetrics />
      </StreamifyProvider>,
    );

    expect(screen.getByText('Key Metrics')).toBeInTheDocument();
    expect(screen.getByText('Total Users')).toBeInTheDocument();
    expect(screen.getByText('1,000,000')).toBeInTheDocument();
    expect(screen.getByText('Active Users')).toBeInTheDocument();
    expect(screen.getByText('750,000')).toBeInTheDocument();
    expect(screen.getByText('Total Streams')).toBeInTheDocument();
    expect(screen.getByText('5,000,000')).toBeInTheDocument();
    expect(screen.getByText('Revenue')).toBeInTheDocument();
    expect(screen.getByText('$2,000,000')).toBeInTheDocument();
    expect(screen.getByText('Top Artist')).toBeInTheDocument();
    expect(screen.getByText('The Weeknd')).toBeInTheDocument();
  });
});
