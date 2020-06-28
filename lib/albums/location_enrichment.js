'use strict';

const constants = require('../../constants/album');
const Location = require('./location');
const Enrichment = require('./enrichment');

class LocationEnrichment extends Enrichment {
  constructor(locationName, latitude, longitude) {
    super();
    this.type = constants.ENRICHMENTS.LOCATION;

    this.location = new Location(locationName, latitude, longitude);
  }

  setContent(locationName, latitude, longitude) {
    this.location.setLocation(locationName, latitude, longitude);
  }

  getEnrichmentJson() {
    return {
      location: this.location.getLocation(),
    };
  }
}

module.exports = LocationEnrichment;
