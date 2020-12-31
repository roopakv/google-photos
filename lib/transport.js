'use strict';

const fs = require('fs');

const apiConstants = require('../constants/api');

const ky = require('ky-universal').create({
  prefixUrl: apiConstants.HOST,
});

class Transport {
  constructor(authToken) {
    this.authToken = authToken;
  }

  get(endpoint, params) {
    return ky(endpoint, {
      headers: this._getHeaders(),
      searchParams: params,
    }).json();
  }

  upload(fileName, filePath, requestTimeout) {
    return ky
      .post('v1/uploads', {
        headers: {
          'Content-Type': 'application/octet-stream',
          Authorization: `Bearer ${this.authToken}`,
          'X-Goog-Upload-File-Name': fileName,
          'X-Goog-Upload-Protocol': 'raw',
        },
        body: fs.readFileSync(filePath),
        timeout: requestTimeout,
      })
      .text();
  }

  post(endpoint, params) {
    return ky
      .post(endpoint, {
        headers: this._getHeaders(),
        json: params,
      })
      .json();
  }

  _getHeaders() {
    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authToken}`,
    };
  }
}

module.exports = Transport;
