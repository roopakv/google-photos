import { MEDIA_TYPE } from '../constants/media_items.ts';

class MediaTypeFilter {
  public mediaTypes: string[]

  constructor(type = MEDIA_TYPE.ALL_MEDIA) {
    this.mediaTypes = [type];
  }

  setType(type: string) {
    this.mediaTypes = [type];
  }

  toJSON() {
    return {
      mediaTypes: this.mediaTypes
    };
  }
}

export = MediaTypeFilter
