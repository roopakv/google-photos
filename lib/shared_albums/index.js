'use strict';

const constants = require('../../constants/shared_albums');

class SharedAlbums {
  constructor(transport) {
    this.transport = transport;
  }

  get(shareToken) {
    return this.transport.get(`${constants.BASE_PATH}/${shareToken}`);
  }

  join(shareToken) {
    return this.transport.post(`${constants.BASE_PATH}:join`, {shareToken});
  }

  leave(shareToken) {
    return this.transport.post(`${constants.BASE_PATH}:leave`, {shareToken});
  }

  list(pageSize = 50, pageToken) {
    return this.transport.get(constants.BASE_PATH, {pageSize, pageToken});
  }
}

module.exports = SharedAlbums;
