'use strict';

const constants = require('../../constants/media_items');

class MediaItems {
  constructor(transport) {
    this.transport = transport;
  }

  get(mediaItemId) {
    return this.transport.get(`${constants.BASE_PATH}/${mediaItemId}`);
  }
}

module.exports = MediaItems;
