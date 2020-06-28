'use strict';

const constants = require('../../constants/album');
const Location = require('./location');
const Enrichment = require('./enrichment');

class MapEnrichment extends Enrichment {
  constructor(origin, destination) {
    super();
    this.type = constants.ENRICHMENTS.MAP;

    if (!(origin instanceof Location) || !(destination instanceof Location)) {
      throw Error('origin and destination are not location');
    }

    this.origin = origin;
    this.destination = destination;
  }

  setContent(origin, destination) {
    this.origin = origin;
    this.destination = destination;
  }

  setOrigin(locationName, latitude, longitude) {
    this.origin = new Location(locationName, latitude, longitude);
    return this;
  }

  setDestination(locationName, latitude, longitude) {
    this.destination = new Location(locationName, latitude, longitude);
    return this;
  }

  getEnrichmentJson() {
    const originJson = this.origin && this.origin.getLocation ? this.origin.getLocation() : {};
    const destinationJson =
      this.destination && this.destination.getLocation ? this.destination.getLocation() : {};
    return {
      origin: originJson,
      destination: destinationJson,
    };
  }
}

module.exports = MapEnrichment;
