'use strict';

const {expect} = require('chai');

const constants = require('../../../constants/album');
const Enrichment = require('../../../lib/albums/enrichment');

class SomeEnrichment extends Enrichment {
  constructor(data, type) {
    super();
    this.data = data;
    this.type = type;
  }

  getEnrichmentJson() {
    return this.data;
  }
}

describe('Enrichment', function () {
  it('doesnʼt instantiate enrichment directly', async function () {
    try {
      // eslint-disable-next-line
      const enrichment = new Enrichment();
      expect.fail();
    } catch (err) {
      expect(err.message).to.equal('Create either a text, location or map enrichment.');
    }
  });

  describe('#getJson', function () {
    it('returns correct textEnrichment json', async function () {
      const enrichment = new SomeEnrichment({a: 'b'}, constants.ENRICHMENTS.TEXT);
      expect(enrichment.getJSON()).to.deep.equal({
        textEnrichment: {a: 'b'},
      });
    });

    it('returns correct location json', async function () {
      const enrichment = new SomeEnrichment({a: 'b'}, constants.ENRICHMENTS.LOCATION);
      expect(enrichment.getJSON()).to.deep.equal({
        locationEnrichment: {a: 'b'},
      });
    });

    it('returns correct map json', async function () {
      const enrichment = new SomeEnrichment({a: 'b'}, constants.ENRICHMENTS.MAP);
      expect(enrichment.getJSON()).to.deep.equal({
        mapEnrichment: {a: 'b'},
      });
    });
  });
});
