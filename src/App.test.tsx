import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

jest.mock('./context/StreamifyContext', () => ({
  StreamifyProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
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
    isLoading: false,
  }),
}));

jest.mock('./context/ThemeContext', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  useTheme: () => ({ theme: 'light', toggleTheme: jest.fn() }),
}));

test('renders Streamify Dashboard', () => {
  render(<App />);

  expect(screen.getByText('Streamify Dashboard')).toBeInTheDocument();
  expect(screen.getByText('Key Metrics')).toBeInTheDocument();
  expect(screen.getByText('Data Visualization')).toBeInTheDocument();
  expect(screen.getByText('Recent Streams')).toBeInTheDocument();
});
