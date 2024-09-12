# Dashboard Application for Streamify

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Project

# Building a Music Streaming Analytics Dashboard

## Project Overview

You are tasked with creating a frontend application that displays an analytics dashboard for a fictional music streaming service called "Streamify." The dashboard should present key metrics and data visualizations, allowing the service's management team to gain insights into user activity, revenue, and content performance. The goal is to build a functional and visually appealing dashboard that is both responsive and user-friendly.

## Requirements

### Dashboard Overview

Create a single-page application (SPA) that includes the following sections:

#### 1. Key Metrics

Display cards that show the following metrics:

- Total Users: The total number of registered users on the platform.
- Active Users: The number of users who have streamed at least one song in the last 30 days.
- Total Streams: The total number of song streams on the platform.
- Revenue: The total revenue generated from subscriptions and advertisements.
- Top Artist: The artist with the most streams in the past 30 days.

#### 2. Data Visualization

Include the following charts:

- User Growth Chart: A line chart that shows the growth in the number of total users and active users over the past 12 months.
- Revenue Distribution: A pie chart that shows the breakdown of revenue from different sources (e.g., Subscriptions, Ads).
- Top 5 Streamed Songs: A bar chart that displays the top 5 most-streamed songs over the past 30 days.

#### 3. Data Table

A table that lists detailed information about recent streams with the following columns:

- Song Name
- Artist
- Date Streamed
- Stream Count
- User ID

### Bonus Features

Think of additional features that a dashboard can have and implement them.

### User Interaction

1. Sorting and Filtering: Implement sorting and filtering functionalities for the data table, allowing users to sort by date or stream count, and filter by artist or song name.
2. Chart Interactions: Allow users to interact with the charts. For example, users should be able to hover over points on the line chart to see exact numbers or click on a segment of the pie chart to filter the data table by that revenue source.

### Design & UX

- The dashboard should be responsive and visually appealing, adapting to various screen sizes.
- Follow a modern design language with a focus on usability and clarity.
- Use a CSS framework like Tailwind, Bootstrap, or a custom solution that you prefer.

### Technical Requirements

- Use React to build the application.
- Handle state management using React's Context API, Redux, or any other state management solution you're comfortable with.
- Data can be hardcoded or mocked using a tool like JSON Server, MirageJS, or similar. You do not need to connect to a real backend or database; feel free to generate realistic mock data to populate the dashboard.
- Ensure your code is clean, modular, and follows best practices.

### Performance Considerations

- Optimize the application for fast loading times and minimal re-renders.
- Consider using techniques like lazy loading, code splitting, and memoization where appropriate.

### [Optional] Testing

- Write unit tests for at least one component using a testing library like Jest or React Testing Library.
- Include any additional tests you think are important.

### Documentation

- Include a README file that explains your thought process, how to run the application, and any trade-offs you made.
- Optionally, include comments in your code to explain complex sections.

## Submission Guidelines

- Host your code in a Git repository (e.g., GitHub, GitLab) and share the link.
- The application should be deployable locally using simple commands (e.g., npm install and npm start).
- Bonus: Deploy the application using a service like Vercel, Netlify, or GitHub Pages, and provide the live link.

## Timeframe

Please submit your completed assignment within 2 to 3 days. We understand that you may have other commitments, so if you require additional time, please let us know in advance.
