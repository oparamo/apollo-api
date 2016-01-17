'use strict';

const Util = require('util');

exports.register = (server, options, next) => {
  server.register([])
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
  name: 'plugins-loader',
  version: '0.0.0'
};
