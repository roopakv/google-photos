'use strict';

const {expect} = require('chai');

const Enrichment = require('./enrichment');

describe('Enrichment', function() {
  it('doesnʼt instantiate enrichment directly', function() {
    try {
      // eslint-disable-next-line
      const enrichment = new Enrichment();
      expect.fail();
    } catch (err) {
      expect(err.message).to.equal('Create either a text, location or map enrichment.');
    }
  });
});
