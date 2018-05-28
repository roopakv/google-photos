'use strict';

const GDate = require('./gdate');

class DateRange {
  constructor(startDate, endDate) {
    this.startDate = startDate;
    this.endDate = endDate;
  }

  toJSON() {
    let startJson = {};
    let endJson = {};

    if (this.startDate instanceof GDate) {
      startJson = this.startDate.toJSON();
    }
    if (this.startDate instanceof Date) {
      startJson = new GDate(this.startDate).toJSON();
    }
    if (this.startDate && this.startDate.isValid && this.startDate.isValid()) {
      startJson = new GDate(this.startDate).toJSON();
    }

    if (this.endDate instanceof GDate) {
      endJson = this.endDate.toJSON();
    }
    if (this.endDate instanceof Date) {
      endJson = new GDate(this.endDate).toJSON();
    }
    if (this.endDate && this.endDate.isValid && this.endDate.isValid()) {
      endJson = new GDate(this.endDate).toJSON();
    }

    return {
      startDate: startJson,
      endDate: endJson
    };
  }
}

module.exports = DateRange;
