import constants from "../constants/album"
import SharedAlbumOptions from "./shared_album_options"
import Enrichment from "./enrichment"
import AlbumPosition from "./album_position"
import Album from "./album"
import Transport from "../transport"

class Albums {
  constructor(public transport: Transport) { }

  list(pageSize = 50, pageToken?: string) {
    return this.transport.get(constants.BASE_PATH, { pageSize, pageToken });
  }

  get(albumId: string) {
    return this.transport.get(`${constants.BASE_PATH}/${albumId}`);
  }

  create(title: string) {
    const album = Album.albumForCreation(title);
    return this.transport.post(constants.BASE_PATH, {
      album: album.toJson()
    });
  }

  share(albumId: string, isCollaborative: boolean, isCommentable: boolean) {
    return this.transport.post(`${constants.BASE_PATH}/${albumId}:share`, {
      sharedAlbumOptions: new SharedAlbumOptions(isCollaborative, isCommentable).toJson()
    });
  }

  unshare(albumId: string) {
    return this.transport.post(`${constants.BASE_PATH}/${albumId}:unshare`);
  }

  addEnrichment(albumId: string, enrichmentItem?: Enrichment, albumPosition?: AlbumPosition) {
    return this.transport.post(`${constants.BASE_PATH}/${albumId}:addEnrichment`, {
      newEnrichmentItem: enrichmentItem instanceof Enrichment ? enrichmentItem.getJSON() : enrichmentItem,
      albumPosition: albumPosition instanceof AlbumPosition ? albumPosition.getJson() : albumPosition
    });
  }

  batchAddMediaItems(albumId: string, mediaItemIds: string[]) {
    if (!mediaItemIds || mediaItemIds.length <= 0) {
      throw Error('mediaItems must be passed');
    }
    return this.transport.post(`${constants.BASE_PATH}/${albumId}:batchAddMediaItems`, {
      mediaItemIds
    });
  }

  batchRemoveMediaItems(albumId, mediaItemIds) {
    if (!mediaItemIds || mediaItemIds.length <= 0) {
      throw Error('mediaItems must be passed');
    }
    const params = {
      mediaItemIds
    }
    return this.transport.post(`${constants.BASE_PATH}/${albumId}:batchRemoveMediaItems`, params);
  }
}

export = Albums
