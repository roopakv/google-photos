'use strict';

const constants = require('../../constants/album');
const Enrichment = require('./enrichment');

class TextEnrichment extends Enrichment {
  constructor(content) {
    super();
    this.type = constants.ENRICHMENTS.TEXT;

    this.content = content;
  }

  setContent(content) {
    this.content = content;
  }

  getEnrichmentJson() {
    return {
      text: this.content,
    };
  }
}

module.exports = TextEnrichment;
