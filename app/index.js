'use strict';

const Hapi = require('hapi');
const Util = require('util');

const Config = require('../config');

const server = new Hapi.Server({
  connections: {
    routes: {
      // allowed origin servers and allow user credentials
      cors: {
        origin: Config.CORS,
        credentials: true
      },
      // json formatting
      json: { space: 2 }
    }
  }
});

// server host and port configuration
server.connection({
  host: Config.HOST,
  port: Config.PORT
});

// start server when plugins registered succesfully
server.register({ register: require('./plugins') }, (err) => {
  if (err) {
    throw err;
  };

  server.start((err) => {
    if (err) {
      return Util.log('Error:', err.message);
    };

    Util.log(`Server started on ${Config.HOST}:${Config.PORT}`);
  });
});

// gracefully stop server upon receipt of process termination signal
process.on('SIGTERM', () => {
  server.stop({ timeout: 5 * 1000 }, () => process.exit(0));
});

module.exports = server;
