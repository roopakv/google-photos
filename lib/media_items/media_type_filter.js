'use strict';

const {MEDIA_TYPE} = require('../../constants/media_items');

class MediaTypeFilter {
  constructor(type = MEDIA_TYPE.ALL_MEDIA) {
    this.mediaTypes = [type];
  }

  setType(type) {
    this.mediaTypes = [type];
  }

  toJSON() {
    return {
      mediaTypes: this.mediaTypes,
    };
  }
}

module.exports = MediaTypeFilter;
