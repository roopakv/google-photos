'use strict';

const constants = require('../../constants/album');

class Album {
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
}

module.exports = Album;
