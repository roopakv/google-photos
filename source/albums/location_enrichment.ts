import constants from "../constants/album"
import Location from "./location"
import Enrichment from "./enrichment"

class LocationEnrichment extends Enrichment {
  public type = constants.ENRICHMENTS.LOCATION
  public location: Location

  constructor(locationName: string, latitude: number, longitude: number) {
    super();
    this.location = new Location(locationName, latitude, longitude);
  }

  setContent(locationName: string, latitude: number, longitude: number) {
    this.location.setLocation(locationName, latitude, longitude);
  }

  getEnrichmentJson() {
    return {
      location: this.location.getLocation()
    };
  }
}

export = LocationEnrichment
