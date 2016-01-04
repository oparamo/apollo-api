'use strict';

const Util = require('util');

const Config = require('../config');
const Server = require('./server');

Server.start((err) => {
  if (err) {
    return Util.log('Error:', err.message);
  };

  Util.log(`Server started on ${Config.HOST}:${Config.PORT}`);
});
