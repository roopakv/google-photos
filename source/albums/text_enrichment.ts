import constants from "../constants/album"
import Enrichment from "./enrichment"

class TextEnrichment extends Enrichment {
  public type = constants.ENRICHMENTS.TEXT

  constructor(public content: string) {
    super();
  }

  setContent(content: string) {
    this.content = content;
  }

  getEnrichmentJson() {
    return {
      text: this.content
    };
  }
}

export = TextEnrichment
