'use strict';

const constants = require('../../constants/album');

class Enrichment {
  constructor() {
    if (this.constructor.name === 'Enrichment') {
      throw Error('Create either a text, location or map enrichment.');
    }
  }

  getJSON() {
    let key;
    if (this.type === constants.ENRICHMENTS.TEXT) {
      key = 'textEnrichment';
    } else if (this.type === constants.ENRICHMENTS.LOCATION) {
      key = 'locationEnrichment';
    } else if (this.type === constants.ENRICHMENTS.MAP) {
      key = 'mapEnrichment';
    }
    return {
      [key]: this.getEnrichmentJson(),
    };
  }
}

module.exports = Enrichment;
