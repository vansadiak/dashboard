import React, { createContext, useContext, useState, ReactNode } from 'react';
import { StreamifyContextState } from '../../types/streamifyContract';
import { mockData } from '../mocks/mockData';

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
  const [state, setState] = useState<StreamifyContextState>(mockData);

  const updateState = (newState: Partial<StreamifyContextState>) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  return <StreamifyContext.Provider value={{ state, updateState }}>{children}</StreamifyContext.Provider>;
};
