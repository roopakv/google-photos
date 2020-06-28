import { POSITION_TYPE } from "../constants/album"

class AlbumPosition {
  public static POSITIONS = POSITION_TYPE
  public relativeItemId: string
  public itemId: string

  constructor(public position: string) { }

  setRelativeItemId(itemId: string) {
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
    const albumPosition: {
      position: AlbumPosition['position'],
      relativeEnrichmentItemId?: string
      relativeMediaItemId?: string
    } = {
      position: this.position
    };
    if (this.position === POSITION_TYPE.AFTER_ENRICHMENT_ITEM) {
      albumPosition.relativeEnrichmentItemId = this.itemId;
    } else if (this.position === POSITION_TYPE.AFTER_MEDIA_ITEM) {
      albumPosition.relativeMediaItemId = this.itemId;
    }
    return albumPosition;
  }
}

export = AlbumPosition
