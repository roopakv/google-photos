'use strict';

const {POSITION_TYPE} = require('../../constants/album');

class AlbumPosition {
  constructor(position) {
    this.position = position;
  }

  setRelativeItemId(itemId) {
    if (
      this.position === POSITION_TYPE.AFTER_ENRICHMENT_ITEM ||
      this.position === POSITION_TYPE.AFTER_MEDIA_ITEM
    ) {
      this.relativeItemId = itemId;
    } else {
      throw Error('Cannot set relative item for this type');
    }
  }

  getJson() {
    const albumPosition = {
      position: this.position,
    };
    if (this.position === POSITION_TYPE.AFTER_ENRICHMENT_ITEM) {
      albumPosition.relativeEnrichmentItemId = this.itemId;
    } else if (this.position === POSITION_TYPE.AFTER_MEDIA_ITEM) {
      albumPosition.relativeMediaItemId = this.itemId;
    }
    return albumPosition;
  }
}

AlbumPosition.POSITIONS = POSITION_TYPE;

module.exports = AlbumPosition;
