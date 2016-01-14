'use strict';

const Util = require('util');

exports.register = (server, options, next) => {
  server.register([require('./apollo-hapi-playmusic')])
  .then((err) =>  {
    /* $lab:coverage:off$ */
    if (err) {
      throw err;
    }
    /* $lab:coverage:on$ */

    Util.log(`Server registered plugins succesfully`);
  });

  next();
};

exports.register.attributes = {
  name: 'apollo-hapi-plugins',
  version: '0.0.0'
};
