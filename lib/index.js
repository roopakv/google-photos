'use strict';

const Albums = require('./albums');
const Transport = require('./transport');

class Photos {
  constructor(authToken) {
    this.transport = new Transport(authToken);
    this.albums = new Albums(this.transport);
  }
}

module.exports = Photos;
