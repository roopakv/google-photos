'use strict';

const path = require('path');
const chunk = require('lodash.chunk');
const constants = require('../../constants/media_items');

class MediaItems {
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

  get(mediaItemId) {
    return this.transport.get(`${constants.BASE_PATH}/${mediaItemId}`);
  }

  batchGet(mediaItemIds) {
    return this.transport.get(`${constants.BASE_PATH}/:batchGet`, mediaItemIds.map(el => { return ['mediaItemIds', el] }));
  }

  async upload(
    albumId,
    fileName,
    filePath,
    description,
    requestTimeout = 10000
  ) {
    const url = `${constants.BASE_PATH}/:batchCreate`;
    const token = await this.transport.upload(
      fileName, filePath, requestTimeout);

    return this.transport.post(url, {
      albumId: albumId || '',
      newMediaItems: [
        {
          description: description || '',
          simpleMediaItem: {
            uploadToken: token,
          },
        },
      ],
    });
  }

  async uploadMultiple(
    albumId,
    files,
    directoryPath,
    requestDelay = 10000,
    requestTimeout = 10000
  ) {
    const url = `${constants.BASE_PATH}/:batchCreate`;
    const batchedFiles = chunk(files, 50);
    // eslint-disable-next-line
    for (const batch of batchedFiles) {
      // eslint-disable-next-line
      const newMediaItems = await Promise.all(
        batch.map(async (file) => {
          const token = await this.transport.upload(
            file.name, path.join(directoryPath, file.name), requestTimeout);

          return {
            description: file.description || '',
            simpleMediaItem: {
              uploadToken: token,
            },
          };
        })
      );
      this.transport.post(url, {
        albumId: albumId || '',
        newMediaItems,
      });
      // google upload token generation seems to cap at ~500 requests per minute, this is a configurable workaround
      // eslint-disable-next-line
      await new Promise((resolve) => setTimeout(resolve, requestDelay));
    }
  }

  search(albumIdOrFilters, pageSize = 50, pageToken) {
    const postBody = {pageSize, pageToken};
    if (typeof albumIdOrFilters === 'string' || albumIdOrFilters instanceof String) {
      postBody.albumId = albumIdOrFilters;
    } else {
      postBody.filters = albumIdOrFilters.toJSON();
    }
    return this.transport.post(`${constants.BASE_PATH}:search`, postBody);
  }
}

module.exports = MediaItems;
