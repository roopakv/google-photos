'use strict';

const request = require('request-promise');

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
