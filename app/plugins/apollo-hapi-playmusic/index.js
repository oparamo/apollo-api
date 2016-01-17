'use strict';

const PlayMusic = require('playmusic');
const Promise = require('bluebird');

const pm = Promise.promisifyAll(new PlayMusic());

exports.register = (server, options, next) => {
  server.expose(pm);

  next();
};

exports.register.attributes = {
  name: 'hapi-playmusic',
  version: '0.0.0'
};
