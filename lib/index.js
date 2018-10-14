'use strict';

const Albums = require('./albums');
const SharedAlbums = require('./shared_albums');
const MediaItems = require('./media_items');

const TextEnrichment = require('./albums/text_enrichment');
const MapEnrichment = require('./albums/map_enrichment');
const LocationEnrichment = require('./albums/location_enrichment');
const Location = require('./albums/location');
const AlbumPosition = require('./albums/album_position');
const Transport = require('./transport');

const {CONTENT_CATEGORY, MEDIA_TYPE} = require('../constants/media_items');
const SCOPES = require('../constants/scopes');
const DateFilter = require('./common/date_filter');
const ContentFilter = require('./media_items/content_filter');
const MediaTypeFilter = require('./media_items/media_type_filter');
const Filters = require('./media_items/filters');

class Photos {
  constructor(authToken) {
    this.transport = new Transport(authToken);
    this.albums = new Albums(this.transport);
    this.sharedAlbums = new SharedAlbums(this.transport);
    this.mediaItems = new MediaItems(this.transport);

    this.Location = Location;
    this.TextEnrichment = TextEnrichment;
    this.MapEnrichment = MapEnrichment;
    this.LocationEnrichment = LocationEnrichment;
    this.AlbumPosition = AlbumPosition;

    this.ContentCategory = CONTENT_CATEGORY;
    this.MediaType = MEDIA_TYPE;
    this.DateFilter = DateFilter;
    this.ContentFilter = ContentFilter;
    this.MediaTypeFilter = MediaTypeFilter;
    this.Filters = Filters;
  }
}

Photos.Scopes = SCOPES;

module.exports = Photos;
