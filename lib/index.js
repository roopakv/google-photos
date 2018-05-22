'use strict';

const Albums = require('./albums');
const SharedAlbums = require('./shared_albums');

const TextEnrichment = require('./albums/text_enrichment');
const MapEnrichment = require('./albums/map_enrichment');
const LocationEnrichment = require('./albums/location_enrichment');
const Location = require('./albums/location');
const AlbumPosition = require('./albums/album_position');
const Transport = require('./transport');

class Photos {
  constructor(authToken) {
    this.transport = new Transport(authToken);
    this.albums = new Albums(this.transport);
    this.sharedAlbums = new SharedAlbums(this.transport);

    this.Location = Location;
    this.TextEnrichment = TextEnrichment;
    this.MapEnrichment = MapEnrichment;
    this.LocationEnrichment = LocationEnrichment;
    this.AlbumPosition = AlbumPosition;
  }
}

module.exports = Photos;
