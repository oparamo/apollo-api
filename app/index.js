'use strict';

let Hapi = require('hapi');
let Util = require('util');

let Config = require('../config');

let server = new Hapi.Server({
  connections: {
    routes: {
      // allowed origin servers and allow user credentials
      cors: {
        origin: Config.CORS,
        credentials: true
      },
      // json formatting
      json: {
        space: 2
      }
    }
  }
});

// server host and port configuration
server.connection({
  host: Config.HOST,
  port: Config.PORT
});

server.register([
  require('./plugins')
], err => {
  if (err) {
    throw err
  };

  server.start(err => {
    if (err) {
      return Util.log('Error:', err.message)
    };

    Util.log(`Server started on ${Config.HOST}:${Config.PORT}`);
  });
});

process.on('SIGTERM', () => server.stop({ timeout: 5 * 1000 }, () => process.exit(0)));

module.exports = server;
