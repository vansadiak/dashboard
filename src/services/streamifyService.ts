import { StreamifyContextState } from '../../types/streamifyContract';
import { generateMockData } from '../mocks/mockData';

export class StreamifyService {
  private mockData: StreamifyContextState;

  constructor() {
    this.mockData = generateMockData(new Date().toISOString().split('T')[0]);
  }

  async getData(date: string): Promise<StreamifyContextState> {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    this.mockData = generateMockData(date);
    return this.mockData;
  }

  async getKeyMetrics(): Promise<StreamifyContextState['keyMetrics']> {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return this.mockData.keyMetrics;
  }

  async getUserGrowthData(): Promise<StreamifyContextState['userGrowthData']> {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return this.mockData.userGrowthData;
  }

  async getRevenueDistribution(): Promise<StreamifyContextState['revenueDistribution']> {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return this.mockData.revenueDistribution;
  }

  async getTopSongs(): Promise<StreamifyContextState['topSongs']> {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return this.mockData.topSongs;
  }

  async getRecentStreams(): Promise<StreamifyContextState['recentStreams']> {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return this.mockData.recentStreams;
  }
}

export const streamifyService = new StreamifyService();
