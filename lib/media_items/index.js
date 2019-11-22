'use strict';

const path = require('path');
const { chunk } = require('lodash');
const constants = require('../../constants/media_items');

class MediaItems {
  constructor(transport) {
    this.transport = transport;
  }

  get(mediaItemId) {
    return this.transport.get(`${constants.BASE_PATH}/${mediaItemId}`);
  }

  async upload(albumId, fileName, filePath, description) {
    let url = `${constants.BASE_PATH}/:batchCreate`
    let token = await this.transport.upload(fileName, filePath)
    return this.transport.post(url, {
      albumId: albumId || "",
      newMediaItems: [{
        description: description || "",
        simpleMediaItem: {
          uploadToken: token
        }
      }]
    })
  }

  async uploadMultiple(albumId, files, directoryPath) {
    const url = `${constants.BASE_PATH}/:batchCreate`
    const batchedFiles = chunk(files, 50)
    for(const batch of batchedFiles) {
      await new Promise(resolve => setTimeout(resolve, 10000)); // HACK: google is limiting requests per minute. this pauses to get around that.
      const newMediaItems = await Promise.all(batch.map(async (file) => {
        let token = await this.transport.upload(file.name, path.join(directoryPath, file.name))
        return {
          description: file.description || "",
          simpleMediaItem: {
            uploadToken: token
          }
        }
      }))
      this.transport.post(url, {
        albumId: albumId || "",
        newMediaItems
      })
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
