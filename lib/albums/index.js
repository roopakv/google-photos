'use strict';

const constants = require('../../constants/album');
const SharedAlbumOptions = require('./shared_album_options');
const Enrichment = require('./enrichment');
const AlbumPosition = require('./album_position');
const Album = require('./album');

class Albums {
  constructor(transport) {
    this.transport = transport;
  }

  list(pageSize = 50, pageToken) {
    const params = {pageSize};
    if (pageToken) {
      params.pageToken = pageToken;
    }
    return this.transport.get(constants.BASE_PATH, params);
  }

  get(albumId) {
    return this.transport.get(`${constants.BASE_PATH}/${albumId}`);
  }

  create(title) {
    const album = Album.albumForCreation(title);
    return this.transport.post(constants.BASE_PATH, {
      album: album.toJson(),
    });
  }

  share(albumId, isCollaborative, isCommentable) {
    const shareOptions = {
      sharedAlbumOptions: new SharedAlbumOptions(isCollaborative, isCommentable).toJson(),
    };
    return this.transport.post(`${constants.BASE_PATH}/${albumId}:share`, shareOptions);
  }

  unshare(albumId) {
    return this.transport.post(`${constants.BASE_PATH}/${albumId}:unshare`);
  }

  addEnrichment(albumId, enrichmentItem, albumPosition) {
    const params = {};
    const enrichmentJson =
      enrichmentItem instanceof Enrichment ? enrichmentItem.getJSON() : enrichmentItem;
    const positionJson =
      albumPosition instanceof AlbumPosition ? albumPosition.getJson() : albumPosition;
    if (enrichmentItem) {
      params.newEnrichmentItem = enrichmentJson;
    }
    if (albumPosition) {
      params.albumPosition = positionJson;
    }
    return this.transport.post(`${constants.BASE_PATH}/${albumId}:addEnrichment`, params);
  }

  batchAddMediaItems(albumId, mediaItemIds) {
    if (!mediaItemIds || mediaItemIds.length <= 0) {
      throw Error('mediaItems must be passed');
    }
    const params = {
      mediaItemIds,
    };
    return this.transport.post(`${constants.BASE_PATH}/${albumId}:batchAddMediaItems`, params);
  }

  batchRemoveMediaItems(albumId, mediaItemIds) {
    if (!mediaItemIds || mediaItemIds.length <= 0) {
      throw Error('mediaItems must be passed');
    }
    const params = {
      mediaItemIds,
    };
    return this.transport.post(`${constants.BASE_PATH}/${albumId}:batchRemoveMediaItems`, params);
  }
}

module.exports = Albums;
