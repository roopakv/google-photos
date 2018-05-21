'use strict';

const constants = require('../../constants/album');
const SharedAlbumOptions = require('./shared_album_options');
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
      album: album.toJson()
    });
  }

  share(albumId, isCollaborative, isCommentable) {
    const shareOptions = {
      sharedAlbumOptions: new SharedAlbumOptions(isCollaborative, isCommentable).toJson()
    };
    return this.transport.post(`${constants.BASE_PATH}/${albumId}:share`, shareOptions);
  }
}

module.exports = Albums;
