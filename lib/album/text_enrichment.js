'use strict';

const constants = require('../../constants/album');
const Enrichment = require('./enrichment');

class TextEnrichment extends Enrichment {
  constructor() {
    super();
    this.type = constants.ENRICHMENTS.TEXT;
  }
}

module.exports = TextEnrichment;
