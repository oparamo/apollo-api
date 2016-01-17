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

  it('should have a promisified login function', (done) => {
    expect(server.plugins['hapi-playmusic'].loginAsync).to.be.a.function();

    done();
  });

  it('should have a promisified init function', (done) => {
    expect(server.plugins['hapi-playmusic'].initAsync).to.be.a.function();

    done();
  });

  it('should have a promisified getSettings function', (done) => {
    expect(server.plugins['hapi-playmusic'].getSettingsAsync).to.be.a.function();

    done();
  });

  it('should have a promisified getAllTracks function', (done) => {
    expect(server.plugins['hapi-playmusic'].getAllTracksAsync).to.be.a.function();

    done();
  });

  it('should have a promisified getStreamUrl function', (done) => {
    expect(server.plugins['hapi-playmusic'].getStreamUrlAsync).to.be.a.function();

    done();
  });

  it('should have a promisified search function', (done) => {
    expect(server.plugins['hapi-playmusic'].searchAsync).to.be.a.function();

    done();
  });

  it('should have a promisified getPlayLists function', (done) => {
    expect(server.plugins['hapi-playmusic'].getPlayListsAsync).to.be.a.function();

    done();
  });

  it('should have a promisified addPlayList function', (done) => {
    expect(server.plugins['hapi-playmusic'].addPlayListAsync).to.be.a.function();

    done();
  });

  it('should have a promisified addTrackToPlayList function', (done) => {
    expect(server.plugins['hapi-playmusic'].addTrackToPlayListAsync).to.be.a.function();

    done();
  });

  it('should have a promisified incrementTrackPlaycount function', (done) => {
    expect(server.plugins['hapi-playmusic'].incrementTrackPlaycountAsync).to.be.a.function();

    done();
  });

  it('should have a promisified removePlayListEntry function', (done) => {
    expect(server.plugins['hapi-playmusic'].removePlayListEntryAsync).to.be.a.function();

    done();
  });

  it('should have a promisified getPlayListEntries function', (done) => {
    expect(server.plugins['hapi-playmusic'].getPlayListEntriesAsync).to.be.a.function();

    done();
  });

  it('should have a promisified getAlbum function', (done) => {
    expect(server.plugins['hapi-playmusic'].getAlbumAsync).to.be.a.function();

    done();
  });

  it('should have a promisified getArtist function', (done) => {
    expect(server.plugins['hapi-playmusic'].getArtistAsync).to.be.a.function();

    done();
  });

  it('should have a promisified getStations function', (done) => {
    expect(server.plugins['hapi-playmusic'].getStationsAsync).to.be.a.function();

    done();
  });

  it('should have a promisified createStation function', (done) => {
    expect(server.plugins['hapi-playmusic'].createStationAsync).to.be.a.function();

    done();
  });

  it('should have a promisified getStationTracks function', (done) => {
    expect(server.plugins['hapi-playmusic'].getStationTracksAsync).to.be.a.function();

    done();
  });

  it('should have a promisified getFavorites function', (done) => {
    expect(server.plugins['hapi-playmusic'].getFavoritesAsync).to.be.a.function();

    done();
  });
});
