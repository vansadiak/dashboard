# Dashboard Application for Streamify

## Live Demo

The application is deployed and can be accessed at:
[https://dashboard-nmmzgthkn-vansadiaks-projects.vercel.app/](https://dashboard-nmmzgthkn-vansadiaks-projects.vercel.app/)

## Project Overview

This dashboard application is designed for Streamify, a fictional music streaming service. It provides a comprehensive analytics interface for the service's management team to gain insights into user activity, revenue, and content performance.

## Features

1. **Key Metrics Display**

   - Total Users
   - Active Users
   - Total Streams
   - Revenue
   - Top Artist

2. **Data Visualization**

   - User Growth Chart (line chart)
   - Revenue Distribution (pie chart)
   - Top 5 Streamed Songs (bar chart)

3. **Recent Streams Data Table**

   - Sortable columns
   - Displays song name, artist, date streamed, stream count, and user ID

4. **Date Selection**

   - Ability to select different dates to view historical data

5. **Theme Toggle**

   - Switch between light and dark modes

6. **Responsive Design**
   - Adapts to various screen sizes for optimal viewing

## Technology Stack

- React
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)
- Highcharts (for data visualization)
- Context API (for state management)

## Getting Started

### Prerequisites

- Node.js: 21.7.3 or later

- npm: 10.0.0 or later (usually comes with Node.js)

### Installation

1. Clone the repository

2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production

## Project Structure

- `src/components`: React components
- `src/context`: Context providers for global state management
- `src/services`: Service layer for data fetching
- `src/utils`: Utility functions
- `src/mocks`: Mock data generation

## Performance Considerations

- Lazy loading of components
- Memoization of expensive computations
- Optimized re-renders using React hooks

## Future Enhancements

- Implement real-time data updates
- Add more detailed analytics and insights
- Integrate with a backend API for real data

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
