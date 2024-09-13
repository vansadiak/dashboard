import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { StreamifyContextState } from '../../types/streamifyContract';
import { streamifyService } from '../services/streamifyService';

interface StreamifyContextType {
  state: StreamifyContextState;
  updateDate: (date: string) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
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
  const [state, setState] = useState<StreamifyContextState | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInitialData = async () => {
      const today = new Date().toISOString().split('T')[0];
      setIsLoading(true);
      const initialData = await streamifyService.getData(today);
      setState({ ...initialData, selectedDate: today });
      setIsLoading(false);
    };
    fetchInitialData();
  }, []);

  const updateDate = async (date: string) => {
    setIsLoading(true);
    const newData = await streamifyService.getData(date);
    setState({ ...newData, selectedDate: date });
    setIsLoading(false);
  };

  if (!state) {
    return null; // or a loading spinner
  }

  return (
    <StreamifyContext.Provider value={{ state, updateDate, isLoading, setIsLoading }}>
      {children}
    </StreamifyContext.Provider>
  );
};
