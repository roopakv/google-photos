import constants from "../constants/album"
import Location from "./location"
import Enrichment from "./enrichment"

class MapEnrichment extends Enrichment {
  public type = constants.ENRICHMENTS.MAP
  constructor(public origin: Location, public destination: Location) {
    super();

    if (!(origin instanceof Location) || !(destination instanceof Location)) {
      throw Error('origin and destination are not location');
    }
  }

  setContent(origin: Location, destination: Location) {
    this.origin = origin;
    this.destination = destination;
  }

  setOrigin(locationName: string, latitude: number, longitude: number) {
    this.origin = new Location(locationName, latitude, longitude);
    return this;
  }

  setDestination(locationName: string, latitude: number, longitude: number) {
    this.destination = new Location(locationName, latitude, longitude);
    return this;
  }

  getEnrichmentJson() {
    return {
      origin: this.origin?.getLocation?.() ?? {},
      destination: this.destination?.getLocation?.() ?? {}
    };
  }
}

export = MapEnrichment
