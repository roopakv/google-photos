'use strict';

const request = require('request-promise');

const apiConstants = require('../constants/api');

function getHeaders() {
  return {'Content-Type': 'application/json'};
}

class Transport {
  constructor(authToken) {
    this.authToken = authToken;
  }

  get(endpoint, params) {
    return request.get(apiConstants.HOST + endpoint, {
      headers: getHeaders(),
      auth: this._getAuth(),
      json: true,
      qs: params
    });
  }

  post(endpoint, params) {
    return request.post(apiConstants.HOST + endpoint, {
      headers: getHeaders(),
      auth: this._getAuth(),
      json: params
    });
  }

  _getAuth() {
    return {bearer: this.authToken};
  }
}

module.exports = Transport;
