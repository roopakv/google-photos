import path from 'path';
import chunk from 'lodash.chunk';
import pMap from 'p-map';
import delay from 'delay';
import constants from '../constants/media_items.ts';
import Transport from "../transport"
import Filters from "./filters"

class MediaItems {
  constructor(private transport: Transport) { }

  get(mediaItemId: string) {
    return this.transport.get(`${constants.BASE_PATH}/${mediaItemId}`);
  }

  async upload(albumId: string | undefined, fileName: string, filePath: string, description?: string) {
    const url = `${constants.BASE_PATH}/:batchCreate`;
    const token = await this.transport.upload(fileName, filePath);
    return this.transport.post(url, {
      albumId: albumId ?? '',
      newMediaItems: [
        {
          description: description ?? '',
          simpleMediaItem: {
            uploadToken: token
          }
        }
      ]
    });
  }

  async uploadMultiple(albumId: string, files: { name: string, description: string }[], directoryPath: string, requestDelay = 10000) {
    const url = `${constants.BASE_PATH}/:batchCreate`;
    for (const batch of chunk(files, 50)) {
      const newMediaItems = await pMap(batch, async file => {
        const token = await this.transport.upload(file.name, path.join(directoryPath, file.name));
        return {
          description: file.description || '',
          simpleMediaItem: {
            uploadToken: token
          }
        };
      })
      this.transport.post(url, {
        albumId: albumId || '',
        newMediaItems
      });
      // google upload token generation seems to cap at ~500 requests per minute, this is a configurable workaround
      await delay(requestDelay)
    }
  }

  search(albumIdOrFilters: string | Filters, pageSize = 50, pageToken: string) {
    const postData: {
      pageSize: number
      pageToken: string
      albumId?: string
      filters?: ReturnType<Filters['toJSON']>
    } = { pageSize, pageToken };
    if (typeof albumIdOrFilters === 'string') {
      postData.albumId = albumIdOrFilters;
    } else {
      postData.filters = albumIdOrFilters.toJSON();
    }
    return this.transport.post(`${constants.BASE_PATH}:search`, postData);
  }
}

export = MediaItems