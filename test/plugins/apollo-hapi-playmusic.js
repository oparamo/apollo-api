'use strict';

const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const before = lab.before;
const expect = Code.expect;

describe('Apollo Api - Google Play Music plugin', () => {
  let server;

  before((done) => {
    server = require('../../app/server');

    done();
  });

  it('should have a login function', (done) => {
    expect(server.plugins['apollo-hapi-playmusic'].login).to.be.a.function();

    done();
  });

  it('should have a init function', (done) => {
    expect(server.plugins['apollo-hapi-playmusic'].init).to.be.a.function();

    done();
  });

  it('should have a getSettings function', (done) => {
    expect(server.plugins['apollo-hapi-playmusic'].getSettings).to.be.a.function();

    done();
  });

  it('should have a getAllTracks function', (done) => {
    expect(server.plugins['apollo-hapi-playmusic'].getAllTracks).to.be.a.function();

    done();
  });

  it('should have a getStreamUrl function', (done) => {
    expect(server.plugins['apollo-hapi-playmusic'].getStreamUrl).to.be.a.function();

    done();
  });

  it('should have a search function', (done) => {
    expect(server.plugins['apollo-hapi-playmusic'].search).to.be.a.function();

    done();
  });

  it('should have a getPlayLists function', (done) => {
    expect(server.plugins['apollo-hapi-playmusic'].getPlayLists).to.be.a.function();

    done();
  });

  it('should have a addPlayList function', (done) => {
    expect(server.plugins['apollo-hapi-playmusic'].addPlayList).to.be.a.function();

    done();
  });

  it('should have a addTrackToPlayList function', (done) => {
    expect(server.plugins['apollo-hapi-playmusic'].addTrackToPlayList).to.be.a.function();

    done();
  });

  it('should have a incrementTrackPlaycount function', (done) => {
    expect(server.plugins['apollo-hapi-playmusic'].incrementTrackPlaycount).to.be.a.function();

    done();
  });

  it('should have a removePlayListEntry function', (done) => {
    expect(server.plugins['apollo-hapi-playmusic'].removePlayListEntry).to.be.a.function();

    done();
  });

  it('should have a getPlayListEntries function', (done) => {
    expect(server.plugins['apollo-hapi-playmusic'].getPlayListEntries).to.be.a.function();

    done();
  });

  it('should have a getAlbum function', (done) => {
    expect(server.plugins['apollo-hapi-playmusic'].getAlbum).to.be.a.function();

    done();
  });

  it('should have a getArtist function', (done) => {
    expect(server.plugins['apollo-hapi-playmusic'].getArtist).to.be.a.function();

    done();
  });

  it('should have a getStations function', (done) => {
    expect(server.plugins['apollo-hapi-playmusic'].getStations).to.be.a.function();

    done();
  });

  it('should have a createStation function', (done) => {
    expect(server.plugins['apollo-hapi-playmusic'].createStation).to.be.a.function();

    done();
  });

  it('should have a getStationTracks function', (done) => {
    expect(server.plugins['apollo-hapi-playmusic'].getStationTracks).to.be.a.function();

    done();
  });

  it('should have a getFavorites function', (done) => {
    expect(server.plugins['apollo-hapi-playmusic'].getFavorites).to.be.a.function();

    done();
  });
});
