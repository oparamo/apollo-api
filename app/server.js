'use strict';

const Hapi = require('hapi');

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

// register plugins
server.register({ register: require('./plugins') })
.then((err) => {
  /* $lab:coverage:off$ */
  if (err) {
    throw err;
  };
  /* $lab:coverage:on$ */
});

module.exports = server;
