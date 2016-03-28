'use strict';

const PlayMusic = require('playmusic');
const Promise = require('bluebird');

module.exports = Promise.promisifyAll(new PlayMusic());
