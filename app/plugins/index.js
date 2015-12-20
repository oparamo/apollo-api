'use strict';

const Util = require('util');

exports.register = (server, options, next) => {
  server.register([
  ], (err) =>  {
    if (err) {
      throw err;
    }

    Util.log(`Server registered plugins succesfully`);
  });

  next();
};

exports.register.attributes = {
  name: 'plugins'
};
