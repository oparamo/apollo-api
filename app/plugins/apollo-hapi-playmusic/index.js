'use strict';

const PlayMusic = require('playmusic');
const pm = new PlayMusic();

const apolloPM = {};

apolloPM.login = (opt, callback) => {
  return pm.login(opt, callback);
};

apolloPM.getStreamUrl = (id, callback) => {
  return pm.getStreamUrl(id, callback);
};

exports.register = (server, options, next) => {
  server.expose(apolloPM);

  next();
};

exports.register.attributes = {
  name: 'apollo-hapi-playmusic',
  version: '0.0.0'
};
