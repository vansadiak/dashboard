import React, { createContext, useContext, useState, ReactNode } from 'react';

interface KeyMetrics {
  totalUsers: number;
  activeUsers: number;
  totalStreams: number;
  revenue: number;
  topArtist: string;
}

interface UserGrowthData {
  date: string;
  totalUsers: number;
  activeUsers: number;
}

interface RevenueDistribution {
  source: string;
  amount: number;
}

interface TopSong {
  name: string;
  artist: string;
  streams: number;
}

interface StreamData {
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
}

interface StreamifyContextState {
  keyMetrics: KeyMetrics;
  userGrowthData: UserGrowthData[];
  revenueDistribution: RevenueDistribution[];
  topSongs: TopSong[];
  recentStreams: StreamData[];
}

interface StreamifyContextType {
  state: StreamifyContextState;
  updateState: (newState: Partial<StreamifyContextState>) => void;
}

const StreamifyContext = createContext<StreamifyContextType | undefined>(undefined);

export const useStreamify = () => {
  const context = useContext(StreamifyContext);
  if (!context) {
    throw new Error('useStreamify must be used within a StreamifyProvider');
  }
  return context;
};

export const StreamifyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<StreamifyContextState>({
    keyMetrics: {
      totalUsers: 0,
      activeUsers: 0,
      totalStreams: 0,
      revenue: 0,
      topArtist: '',
    },
    userGrowthData: [],
    revenueDistribution: [],
    topSongs: [],
    recentStreams: [],
  });

  const updateState = (newState: Partial<StreamifyContextState>) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  return <StreamifyContext.Provider value={{ state, updateState }}>{children}</StreamifyContext.Provider>;
};
