import constants from "../constants/album"

const enrichmentType = new Map([
  [constants.ENRICHMENTS.TEXT, "textEnrichment"],
  [constants.ENRICHMENTS.LOCATION, "locationEnrichment"],
  [constants.ENRICHMENTS.MAP, "mapEnrichment"]
])

class Enrichment {
  public type: typeof constants.ENRICHMENTS.TEXT | typeof constants.ENRICHMENTS.LOCATION | typeof constants.ENRICHMENTS.MAP

  getEnrichmentJson() {
    throw new Error("Not implemented by extending class!")
  }

  constructor() {
    if (this.constructor.name === 'Enrichment') {
      throw Error('Create either a text, location or map enrichment.');
    }
  }

  getJSON() {
    return {
      [enrichmentType.get(this.type)]: this.getEnrichmentJson()
    };
  }
}

export = Enrichment
