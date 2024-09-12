import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of our context state
interface StreamifyContextState {
  totalUsers: number;
  activeUsers: number;
  totalStreams: number;
  revenue: number;
  topArtist: string;
  // Add more state properties as needed
}

// Define the shape of our context
interface StreamifyContextType {
  state: StreamifyContextState;
  updateState: (newState: Partial<StreamifyContextState>) => void;
}

// Create the context
const StreamifyContext = createContext<StreamifyContextType | undefined>(undefined);

// Create a custom hook to use the context
export const useStreamify = () => {
  const context = useContext(StreamifyContext);
  if (!context) {
    throw new Error('useStreamify must be used within a StreamifyProvider');
  }
  return context;
};

// Create the provider component
export const StreamifyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<StreamifyContextState>({
    totalUsers: 0,
    activeUsers: 0,
    totalStreams: 0,
    revenue: 0,
    topArtist: '',
    // Initialize other state properties here
  });

  const updateState = (newState: Partial<StreamifyContextState>) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  return <StreamifyContext.Provider value={{ state, updateState }}>{children}</StreamifyContext.Provider>;
};
