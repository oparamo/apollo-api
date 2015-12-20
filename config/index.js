'use strict';

// set up for default/development environment
const config = {
  CORS: [process.env.APOLLO_CORS || '*'],
  HOST: process.env.APOLLO_HOST || '0.0.0.0',
  PORT: process.env.APOLLO_PORT || 4000
};

module.exports = config;
