'use strict';

const Album = require('./album');
const Transport = require('./transport');

class Photos {
  constructor(authToken) {
    this.transport = new Transport(authToken);
    this.albums = new Album(this.transport);
  }
}

module.exports = Photos;
