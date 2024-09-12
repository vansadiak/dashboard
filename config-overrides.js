const path = require('path');

module.exports = function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@types': path.resolve(__dirname, 'types'),
    '@mocks': path.resolve(__dirname, 'mocks'),
  };
  return config;
};
