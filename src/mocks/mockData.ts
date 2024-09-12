import { StreamifyContextState } from '../../types/streamifyContract';

export const mockData: StreamifyContextState = {
  keyMetrics: {
    totalUsers: 1000000,
    activeUsers: 750000,
    totalStreams: 5000000,
    revenue: 1000000,
    topArtist: 'The Weeknd',
  },
  userGrowthData: [
    { date: '2023-01-01', totalUsers: 800000, activeUsers: 600000 },
    { date: '2023-02-01', totalUsers: 850000, activeUsers: 650000 },
    { date: '2023-03-01', totalUsers: 900000, activeUsers: 700000 },
    { date: '2023-04-01', totalUsers: 950000, activeUsers: 725000 },
    { date: '2023-05-01', totalUsers: 1000000, activeUsers: 750000 },
  ],
  revenueDistribution: [
    { source: 'Subscriptions', amount: 750000 },
    { source: 'Advertisements', amount: 200000 },
    { source: 'Merchandise', amount: 50000 },
  ],
  topSongs: [
    { name: 'Blinding Lights', artist: 'The Weeknd', streams: 1000000 },
    { name: 'Shape of You', artist: 'Ed Sheeran', streams: 900000 },
    { name: 'Dance Monkey', artist: 'Tones and I', streams: 800000 },
    { name: 'Rockstar', artist: 'Post Malone', streams: 700000 },
    { name: 'Someone You Loved', artist: 'Lewis Capaldi', streams: 600000 },
  ],
  recentStreams: {
    columns: [
      { key: 'songName', sortable: false },
      { key: 'artist', sortable: false },
      { key: 'dateStreamed', sortable: true },
      { key: 'streamCount', sortable: true },
      { key: 'userId', sortable: false },
    ],
    data: [
      {
        songName: 'Blinding Lights',
        artist: 'The Weeknd',
        dateStreamed: '2023-05-01T12:00:00Z',
        streamCount: Math.floor(Math.random() * 1000) + 1,
        userId: 'user1',
      },
      {
        songName: 'Shape of You',
        artist: 'Ed Sheeran',
        dateStreamed: '2023-05-01T11:55:00Z',
        streamCount: Math.floor(Math.random() * 1000) + 1,
        userId: 'user2',
      },
      {
        songName: 'Dance Monkey',
        artist: 'Tones and I',
        dateStreamed: '2023-05-01T11:50:00Z',
        streamCount: Math.floor(Math.random() * 1000) + 1,
        userId: 'user3',
      },
      {
        songName: 'Rockstar',
        artist: 'Post Malone',
        dateStreamed: '2023-05-01T11:45:00Z',
        streamCount: Math.floor(Math.random() * 1000) + 1,
        userId: 'user4',
      },
      {
        songName: 'Someone You Loved',
        artist: 'Lewis Capaldi',
        dateStreamed: '2023-05-01T11:40:00Z',
        streamCount: Math.floor(Math.random() * 1000) + 1,
        userId: 'user5',
      },
    ],
  },
};
