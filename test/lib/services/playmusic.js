'use strict';

const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const before = lab.before;
const expect = Code.expect;

describe('Apollo Api - playmusic plugin', () => {
  let Services;

  before((done) => {
    Services = require('../../../app/lib/services');

    done();
  });

  it('should have a promisified playmusic API', (done) => {
    expect(Services.playmusic.loginAsync).to.be.a.function();
    expect(Services.playmusic.initAsync).to.be.a.function();
    expect(Services.playmusic.getSettingsAsync).to.be.a.function();
    expect(Services.playmusic.getAllTracksAsync).to.be.a.function();
    expect(Services.playmusic.getStreamUrlAsync).to.be.a.function();
    expect(Services.playmusic.searchAsync).to.be.a.function();
    expect(Services.playmusic.getPlayListsAsync).to.be.a.function();
    expect(Services.playmusic.addPlayListAsync).to.be.a.function();
    expect(Services.playmusic.addTrackToPlayListAsync).to.be.a.function();
    expect(Services.playmusic.incrementTrackPlaycountAsync).to.be.a.function();
    expect(Services.playmusic.removePlayListEntryAsync).to.be.a.function();
    expect(Services.playmusic.getPlayListEntriesAsync).to.be.a.function();
    expect(Services.playmusic.getAlbumAsync).to.be.a.function();
    expect(Services.playmusic.getArtistAsync).to.be.a.function();
    expect(Services.playmusic.getStationsAsync).to.be.a.function();
    expect(Services.playmusic.createStationAsync).to.be.a.function();
    expect(Services.playmusic.getStationTracksAsync).to.be.a.function();
    expect(Services.playmusic.getFavoritesAsync).to.be.a.function();

    done();
  });
});
