export interface KeyMetrics {
  totalUsers: number;
  activeUsers: number;
  totalStreams: number;
  revenue: number;
  topArtist: string;
}

export interface UserGrowthData {
  date: string;
  totalUsers: number;
  activeUsers: number;
}

export interface RevenueDistribution {
  source: string;
  amount: number;
}

export interface TopSong {
  name: string;
  artist: string;
  streams: number;
}

export interface StreamData {
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
}

export type SortableStreamDataColumns = {
  key: keyof StreamData;
  sortable: boolean;
};

export interface StreamDataConfig {
  data: StreamData[];
  columns: SortableStreamDataColumns[];
}

export interface StreamifyContextState {
  keyMetrics: KeyMetrics;
  userGrowthData: UserGrowthData[];
  revenueDistribution: RevenueDistribution[];
  topSongs: TopSong[];
  recentStreams: StreamDataConfig;
}
