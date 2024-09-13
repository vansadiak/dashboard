import { StreamifyContextState } from '../../types/streamifyContract';

export const generateMockData = (date: string): StreamifyContextState => {
  const selectedDate = new Date(date);

  return {
    selectedDate: date,
    keyMetrics: {
      totalUsers: Math.floor(Math.random() * 2000000) + 1000000,
      activeUsers: Math.floor(Math.random() * 1500000) + 500000,
      totalStreams: Math.floor(Math.random() * 10000000) + 5000000,
      revenue: Math.floor(Math.random() * 2000000) + 1000000,
      topArtist: ['The Weeknd', 'Ed Sheeran', 'Taylor Swift', 'Drake', 'Ariana Grande'][Math.floor(Math.random() * 5)],
    },
    userGrowthData: [
      { date: '2023-01-01', totalUsers: 800000, activeUsers: 600000 },
      { date: '2023-02-01', totalUsers: 850000, activeUsers: 650000 },
      { date: '2023-03-01', totalUsers: 900000, activeUsers: 700000 },
      { date: '2023-04-01', totalUsers: 950000, activeUsers: 725000 },
      { date: date, totalUsers: 1000000, activeUsers: 750000 },
    ],
    revenueDistribution: [
      { source: 'Subscriptions', amount: Math.floor(Math.random() * 750000) + 500000 },
      { source: 'Advertisements', amount: Math.floor(Math.random() * 200000) + 100000 },
      { source: 'Merchandise', amount: Math.floor(Math.random() * 50000) + 25000 },
    ],
    topSongs: [
      { name: 'Blinding Lights', artist: 'The Weeknd', streams: Math.floor(Math.random() * 1000000) + 500000 },
      { name: 'Shape of You', artist: 'Ed Sheeran', streams: Math.floor(Math.random() * 900000) + 450000 },
      { name: 'Dance Monkey', artist: 'Tones and I', streams: Math.floor(Math.random() * 800000) + 400000 },
      { name: 'Rockstar', artist: 'Post Malone', streams: Math.floor(Math.random() * 700000) + 350000 },
      { name: 'Someone You Loved', artist: 'Lewis Capaldi', streams: Math.floor(Math.random() * 600000) + 300000 },
    ],
    recentStreams: {
      columns: [
        { key: 'songName', sortable: false },
        { key: 'artist', sortable: false },
        { key: 'dateStreamed', sortable: true },
        { key: 'streamCount', sortable: true },
        { key: 'userId', sortable: false },
      ],
      data: Array.from({ length: 10 }, () => {
        const songIndex = Math.floor(Math.random() * songs.length);
        return {
          songName: songs[songIndex].name,
          artist: songs[songIndex].artist,
          dateStreamed: new Date(selectedDate.getTime() - Math.floor(Math.random() * 86400000)).toISOString(), // Random time within the last 24 hours
          streamCount: Math.floor(Math.random() * 1000) + 1,
          userId: `user${Math.floor(Math.random() * 10000) + 1}`,
        };
      }),
    },
  };
};

const songs = [
  { name: 'Blinding Lights', artist: 'The Weeknd' },
  { name: 'Shape of You', artist: 'Ed Sheeran' },
  { name: 'Dance Monkey', artist: 'Tones and I' },
  { name: 'Rockstar', artist: 'Post Malone' },
  { name: 'Someone You Loved', artist: 'Lewis Capaldi' },
  { name: 'Watermelon Sugar', artist: 'Harry Styles' },
  { name: 'Bad Guy', artist: 'Billie Eilish' },
  { name: 'Levitating', artist: 'Dua Lipa' },
  { name: 'Drivers License', artist: 'Olivia Rodrigo' },
  { name: 'Stay', artist: 'The Kid LAROI & Justin Bieber' },
];
