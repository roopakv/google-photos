'use strict';

const request = require('request-promise');
const fs = require('fs');

const apiConstants = require('../constants/api');

class Transport {
  constructor(authToken) {
    this.authToken = authToken;
  }

  get(endpoint, params) {
    const url = apiConstants.HOST + endpoint;
    const payload = {
      headers: this._getHeaders(),
      json: true,
      qs: params
    };
    return request.get(url, payload);
  }

  upload (fileName, filePath) {
    const url = apiConstants.HOST + '/v1/uploads';
    const payload = {
      headers: {
        'Content-Type': 'application/octet-stream',
        Authorization: 'Bearer ' + this.authToken,
        'X-Goog-Upload-File-Name': fileName,
        'X-Goog-Upload-Protocol': 'raw'
      },
      body: fs.createReadStream(filePath)
    };

    return request.post(url, payload);
  }

  post(endpoint, params) {
    const url = apiConstants.HOST + endpoint;
    const payload = {
      headers: this._getHeaders(),
      json: params
    };

    return request.post(url, payload);
  }

  _getHeaders() {
    return {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.authToken
    };
  }
}

module.exports = Transport;
